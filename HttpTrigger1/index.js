module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var service = require('./cognitiveserverbroker');
    console.log(req.body);
    var imageUrl= req.body.imageUrl;
    //var payload = JSON.parse(req.body);
    console.log(imageUrl);
    await service.exec_facedetect(context, imageUrl);
}