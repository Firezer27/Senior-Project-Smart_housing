const express = require('express')
const mongoose = require('mongoose');
const User =require("./models/user.model.js");
const userRoutes=require("./routes/user.route.js")
const admin = require('firebase-admin');
const cors=require('cors');
const app = express()
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

var serviceAccount = require("./broker-system-2f8c5-firebase-adminsdk-j0z57-a6310e5fb1.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
app.use(cors({
  origin: 'http://localhost:3001', 
  methods: ['GET', 'POST','PUT','DELETE'], 
}));

app.use('/api/user',userRoutes);

app.post('/setRole', async (req, res) => {
  const { uid, userType } = req.body;
  console.log(req.body)
  try {
    await admin.auth().setCustomUserClaims(uid, { userType });
    res.status(200).send({ message: `Role ${ userType} assigned to user ${uid}` });
    console.log(`Role ${ userType} assigned to user ${uid}`);
  } catch (error) {
    console.error('Error assigning role:', error);
    res.status(500).json({ message: 'Failed to assign role.', error: error.message }); 
  }
});



mongoose.connect('mongodb+srv://rediettedila5:a31mKH1Uh8jv7JYX@seniorproject.91pud.mongodb.net/?retryWrites=true&w=majority&appName=SeniorProject')
  .then(() =>{
    console.log('Connected!');
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    });
  }).catch(()=>{
    console.log("Connection failed!");
  });