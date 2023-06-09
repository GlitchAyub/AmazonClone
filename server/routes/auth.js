const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs')
const authRouter = express.Router();
const jwt = require('jsonwebtoken');


authRouter.post('/api/signup',async (req,res)=>{
    try {
        const {name,email,password} = req.body

    const existingUser =await User.findOne({email});
    if(existingUser){
       return res.status(400).json({msg:'User with same email already exists!'});
    }

    const hashedPassword = await bcrypt.hash(password,8)
    let user =  new User({
    email,
    password : hashedPassword,
    name,
    })

    user = await user.save();
    res.json(user);
    } catch (error) {
        res.status(500).json(error.message)
    }
    
    
})

// SIGNIN ROUTE
// Exercise
authRouter.post('/api/signin',async(req,res)=>{
try {
    const{email,password}= req.body;
    const user =await User.findOne({email})
    if(!user){
        return res.status(400).json({msg:"User with this email does not exist"},);
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({msg:"Incorrect Password "},);
    }
   const token =  jwt.sign({id:'_id'},'passwordKey');
   res.json({token,...user._doc});
} catch (error) {
    res.status(500).json(error.message)
    
}
})

module.exports =  authRouter;