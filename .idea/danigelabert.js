const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json(), cors());

port = 3000;
app.listen(port, () => {
    console.log(`Port::${port}`);
});



var admin = require("firebase-admin");

var serviceAccount = require(".\\exdanigelabert-firebase-adminsdk-9pi9w-e7632c1c64.json");

const {getFirestore} = require("firebase-admin/firestore");
const {merge} = require("nodemon/lib/utils");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

// app.get('/danigelabert/jugadors', cors(), async (req, res)=> {
//     const cityRef = db.collection('mundialGelabert').doc('finalGelabert');
//     const doc = await cityRef.get();
//     if (!doc.exists) {
//         console.log('No such document!');
//     } else {
//         console.log('Document data:', doc.data());
//     }
//     res.json(doc.data());
// });

app.get('/danigelabert/jugadors', cors(), async (req,res)=>{
    let jugadors = {jugadors: req.query.jugadors}
    let resultat = false;
    const docs = db.collection('mundialGelabert').doc('finalGelabert');
    res.json(jugadors);
    console.log(jugadors)
});

app.post('/danigelabert/mvp', cors(),async (req)=>{
    const nom={nom: req.body.nom};
    const res = await db.collection('mundialGelabert').doc('mvp').set(nom);
    console.log(nom)
});

