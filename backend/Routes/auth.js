const express = require('express');
const User = require('../models/User');
const router = express.Router();

 //Creating  a user  using  API
router.get('/',(req,res)=>{
    const user =  User(req.body);
     user.save();
    res.send(req.body);
    
})

module.exports = router