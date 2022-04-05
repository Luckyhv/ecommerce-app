const express=require("express");
const router=express.Router();
const User=require("../models/User");
var bcrypt = require('bcryptjs');
const jwt=require("jsonwebtoken");
require('dotenv').config()

// Creating Register Endpoint -Post 
router.post("/createuser",async(req,res)=>{
    let checkuser=await User.findOne({email:req.body.email});
    if(checkuser){
        return res.status(400).json({ success,error: "sorry user exists" });
    }
    var salt =await bcrypt.genSaltSync(10);
    var pass=await bcrypt.hash(req.body.password, salt);
    const newuser=new User({
        username:req.body.username,
        email:req.body.email,
        password:pass,
        isAdmin:req.body.isAdmin,
    });
    try {
        const savedUser=await newuser.save();
        res.status(200).send(savedUser);
    } catch (error) {
        res.status(400).send("error occured");
    }
});

// login user-Get
router.get("/getuser",async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});
        !user && res.status(400).json({error:"login details not found"});
        // here entered pass is checked(req.body.paasword) with pass in db(user.password)
        const passcheck=bcrypt.compareSync(req.body.password, user.password);
        // console.log(passcheck);
        if(!passcheck){
            return res.status(400).json({error: "Login details not found"});
        }
        const data={
            user:{
                id:user._id,
                isAdmin:user.isAdmin,
            }
        }
        const authtoken=jwt.sign(data,process.env.secpass,{expiresIn:"3d"});
        // sending user data except password after destructuring
        const {password,...others}=user._doc;
        res.status(200).send({...others,authtoken})
    } catch (error) {
        res.status(400).send("error occured");
    }
})

module.exports =router;