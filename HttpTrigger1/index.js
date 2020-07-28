module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var cogService = require('./cognitiveserverbroker');
    //var kafkaService = require('./kafkabroker');

    var imageUrl= req.body.imageUrl;
    console.log(imageUrl);

    //await kafkaService.sendTransaction('123456', new Date(),req.body.transaction);
    await cogService.exec_facedetect(context, imageUrl);
}