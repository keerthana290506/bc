const express = require('express')
const router = express.Router();

router.post('/signup',(req,res)=>{
    const {username,email,password,dob} = req.body;
    if(!username){
        return res.json({message:"username should be there"})
    }
    if(!email){
        return res.json({message:"username should be there"})
    }if (!password) {
        return res.status(400).json({ error: "Password cannot be empty" });
      }
    
    if (password.length < 8 || password.length > 16) {
        return res.status(400).json({ error: "Password length should be greater than 8 or less than or equal to 16" });
      }if (!dob) {
        return res.status(400).json({ error: "Date of Birth cannot be empty" });
      }
      const newUser = { username, email, password, dob };
      console.log("User created:", newUser);
      res.status(201).json({ message: "Signup successful", user: newUser });
})



module.exports = router