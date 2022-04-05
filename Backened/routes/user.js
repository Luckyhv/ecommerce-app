const express = require("express")
const router = express.Router()
const User=require("../models/User");
const {verifytoken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require('../middleware/verifytoken');

// Update user
router.put("/:id",verifytoken ,async (req, res) => {
    if (req.body.password) {
        var salt = await bcrypt.genSaltSync(10);
        var pass = await bcrypt.hash(req.body.password, salt);
        req.body.password = pass;
    }
    try {
        const updateduser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(401).send("error in updating");
    }
})

// Delete User
router.delete("/:id",verifyTokenAndAuthorization,async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"User Deleted"});
    } catch (error) {
        res.status(401).send("error in deleting");
    }
})

// Get User
router.get("/find/:id",verifyTokenAndAdmin,async (req, res) => {
    try {
        const user=await User.findById(req.params.id);
        const {password,...others}=user._doc;
        res.status(200).send({...others});
    } catch (error) {
        res.status(401).send("error in getting a user");
    }
})

// get all users
// query get by using ?new=true
router.get("/",async (req, res) => {
    const query=req.query.new;
    try {
        const users=query ? await User.find().sort({id:-1}).limit(5) : await User.find();
        // const {password,...others}=user._doc;
        res.status(200).json(users);
    } catch (error) {
        res.status(401).send("error in getting all users");
    }
})

// get user stats 
// just copied did not understand
router.get("/stats",async(req,res)=>{
    const date=new Date();
    const lastyear=new Date(date.setFullYear(date.setFullYear()-1));
try {
    const data= await User.aggregate([
        {
            $match: { createdAt: { $gte: lastyear } }
        },
        {
        $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
    ]);
    res.status(200).json(data);
} catch (error) {
    res.status(500).send("error in getting stats");
}

})
module.exports = router;