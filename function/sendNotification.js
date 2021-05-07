var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var registrationToken = "fVyPIlyLRAu-vyItlxHEAV:APA91bE1-72_bqmZhWmeluwBajTH6k3up4FfiyXFx0bta_73vak3VJf17iAnSSFrljDjhPo--UKVsPtI4ViUIB2j9PWohZZ_xD-u-BD_vjrkmV5Ifeptnla3P8OrQREqxmCyPOe3W18L";



var message = {
    data: {
        title:'This is demo title',
        body:'this is demo body',
    },
    token: registrationToken
};

admin.messaging().send(message)
.then((res) => console.log(`Successfully sent message: ${res}`))
.catch((err) => console.log(`Failed to sent message: ${err}`))