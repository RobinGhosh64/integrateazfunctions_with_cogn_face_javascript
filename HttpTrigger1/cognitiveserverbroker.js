


const axios = require('axios').default;



// Add a valid subscription key and endpoint to your environment variables.
let subscriptionKey = process.env['FACE_SUBSCRIPTION_KEY']
let endpoint = process.env['FACE_ENDPOINT'] + '/face/v1.0/detect'

// Optionally, replace with your own image URL (for example a .jpg or .png URL).
let imageUrl = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/faces.jpg'


if (subscriptionKey == null) {
    subscriptionKey = '0210565bb9ac4ed5958a92f12fb4dd09';
    endpoint ='https://westus2.api.cognitive.microsoft.com/' + 'face/v1.0/detec'
}

module.exports={
 
    /*
    *  Execute a sql query
    */
   exec_facedetect: function  (context,imageUrl) {
       
        console.log("Executing the facedetect with imageUrl=" + imageUrl);
        if (imageUrl == null) {
            imageUrl='https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/faces.jpg'
        }        
        // Send a POST request
        axios({
            method: 'post',
            url: endpoint,
            params : {
                returnFaceId: true,
                returnFaceLandmarks: false,
                returnFaceAttributes: 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
            },
            data: {
                url: imageUrl,
            },
            headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey }
        }).then(function (response) {
            console.log('Status text: ' + response.status)
            console.log('Status text: ' + response.statusText)
            console.log()
            response.data.forEach((face) => {

                
            context.res = { body: face}
            //console.log(response.data)
                /*
            console.log('Face ID: ' + face.faceId)
            console.log('Face rectangle: ' + face.faceRectangle.top + ', ' + face.faceRectangle.left + ', ' + face.faceRectangle.width + ', ' + face.faceRectangle.height)
            console.log('Smile: ' + face.faceAttributes.smile)
            console.log('Head pose: ' + JSON.stringify(face.faceAttributes.headPose))
            console.log('Gender: ' + face.faceAttributes.gender)
            console.log('Age: ' + face.faceAttributes.age)
            console.log('Facial hair: ' + JSON.stringify(face.faceAttributes.facialHair))
            console.log('Glasses: ' + face.faceAttributes.glasses)
            console.log('Smile: ' + face.faceAttributes.smile)
            console.log('Emotion: ' + JSON.stringify(face.faceAttributes.emotion))
            console.log('Blur: ' + JSON.stringify(face.faceAttributes.blur))
            console.log('Exposure: ' + JSON.stringify(face.faceAttributes.exposure))
            console.log('Noise: ' + JSON.stringify(face.faceAttributes.noise))
            console.log('Makeup: ' + JSON.stringify(face.faceAttributes.makeup))
            console.log('Accessories: ' + JSON.stringify(face.faceAttributes.accessories))
            console.log('Hair: ' + JSON.stringify(face.faceAttributes.hair))
            console.log()*/
                
            });
        }).catch(function (error) {
            
            console.log(error) 
            context.res = { body: error, status: 500}
        });
       
    }


};

