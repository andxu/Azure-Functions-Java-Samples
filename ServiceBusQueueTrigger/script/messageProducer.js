require('dotenv').config();

var azure = require('azure');
var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var retryOperations = new azure.ExponentialRetryPolicyFilter();

var serviceBusService = azure.createServiceBusService("").withFilter(retryOperations);

log("Starting Message Producer \n");
log("Queue: hello");
log("==========================\n")

var recursiveAsyncReadLine = function () {
  rl.question('Message: ', function (input) {
    var message = {
      body: input,
      customProperties: { testproperty: 'TestValue' }
    };

    log('Sending message.');

    serviceBusService.sendQueueMessage('hello', message, function(error){
      if(!error){
        log('message sent.');
        recursiveAsyncReadLine(); 
      }
    });
  });
};

recursiveAsyncReadLine(); 
