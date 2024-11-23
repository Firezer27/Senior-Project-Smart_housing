const admin = require("../config/firebaseAdmin.config"); 
const User = require("../models/user.model"); 
const Role = require("../models/role.model"); 

const signup = async (req, res) => {
  const { uid, email, roleId } = req.body;

  try {
    const validRole = await Role.findById(roleId);
    if (!validRole) {
      return res.status(400).json({ error: "Invalid role ID" });
    }

  
    const user = new User({
      uid, 
    //   email,
      role: validRole._id, 
    });

    await user.save();

    // Step 3: Optionally, set Firebase custom claims (assign role to Firebase)
    await admin.auth().setCustomUserClaims(uid, { roleId });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signup };
