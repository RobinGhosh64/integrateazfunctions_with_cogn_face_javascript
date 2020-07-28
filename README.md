# integrateazfunctions_with_cognitive_face_api
Integrate Azure Function with Azure Cognitive Services using Node JS


By default, AZ Functions does not support straight integration with Cognitive Services in Azure. As a developer, you can always bring in a module or an external library into the context of the Azure Function. Using this technique, I am providing the community an option to bring in any npm package into azure function and call any methods.
Remember, nodejs is asynchronous so the exec_sql method in sqlserver is declared as async and my actual query calls are in await mode. I had to pass in my context into that method or else the json response would be blank to the calling program.

I have another project that you can use if you are looking for a solution for SQL Server access via Azure functions
https://github.com/RobinGhosh64/integrateazfunctions_with_sqlserver.git

Another implementation for C# will be provided soon.

Cheers!

Adding my Postman payload here for testing. I do have a version of this project that can stack up multiple requests if your queries are long consuming. In that situation you can come back later and query your response using a jobid.

Use this payload via curl or POSTMAN. Make sure Content-Type is application/json
{
    "imageUrl":"https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/faces.jpg",
    "transaction" : {
        "store_id": "45",
        "merchant_id" :  "46",
        "trantype" : "SALES", 
        "amount": "45.46"
    }
 }

robin.ghosh@microsoft.com   # Robin S Ghosh

(Sr Cloud Solution Architect)


