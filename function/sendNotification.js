var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var registrationToken = "Your Token";



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
