### Prerequisites

- A [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction)
- Node.js (Insert items to Cosmos DB)

### Steps
1. Go to `project/pom.xml`, replace the value of `resource-group` and `azure-functions-name` with the real value you want.
2. In `azure-functions-maven-plugin` configuration field, repleace the `connectionString` with your Cosmos DB's connection string.
3. Find your Cosmos DB in Azure Portal. Open the `Data Explorer`
4. Create a new database `db`, in the database `db`, create a new collection `col`. They are the name we will use in the function example. 
5. Run `mvn clean package` under `project` folder to build the project.
6. Run `mvn azure-functions:deploy` to deploy the project, if the function app not exists in Azure, it will create a new one.
7. In the `Data Explorer`, insert some documents into the target collection and see if the function get triggered.
