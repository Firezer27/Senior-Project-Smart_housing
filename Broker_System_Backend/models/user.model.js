const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    // email: { type: String, required: true, unique: true },
    // name: { type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
   
});

module.exports = mongoose.model("User", UserSchema);