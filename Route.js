const express = require('express')

const router = express.Router()
const users = [
    { username: "alice", age: 25, email: "alice@example.com" },
    { username: "bob", age: 30, email: "bob@example.com" },
    { username: "charlie", age: 28, email: "charlie@example.com" },
  ];
router.get('/',async(req,res)=>{
    const {user} = req.query;
    if(!user || user.trim==""){
        return res
      .status(400)
      .json({ message: "User parameter cannot be empty" });
    }
    const foundUser = users.find((u)=>u.username===user)
    if (foundUser) {
        return res.status(200).json({ message: "User found", data: foundUser });
      } else {
        return res.status(404).json({ message: "User not found" });
      }

})

module.exports = router