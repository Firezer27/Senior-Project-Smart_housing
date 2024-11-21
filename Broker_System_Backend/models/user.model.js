const mongoose = require('mongoose');
const UserSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"please enter first name"]
    },
    lastName:{
        type:String,
        required:[true,"please enter last name"]
    },
    email:{
        type:String,
        required:[true,"please enter email address"]
    },
    password:{
        type:String,
        required:[true,"please enter password"]
    },
    image:{
        type:String,
        required:[false]
    },
      role:{
        type:String,
        required:[true,"please add a role"]
    },
});
const User=mongoose.model("User",UserSchema);
module.exports=User;