const express=require("express");
const router=express.Router();
const Order=require("../models/Order");
const {verifytoken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require('../middleware/verifytoken');


// Create
router.post("/",verifytoken,async(req,res)=>{
    const neworder = new Order(req.body);
    try {
      const savedorder = await neworder.save();
      res.status(200).json(savedorder);
    } catch (err) {
      res.status(500).json(err);
    }
})

// Update cart
router.put("/:id",verifyTokenAndAuthorization ,async (req, res) => {
    try {
        const updatedorder = await Order.findOne({ userId: req.params.userId });
        res.status(200).json(updatedorder);
    } catch (error) {
        res.status(401).send("error in updating");
    }
})

// Delete cart
router.delete("/:id",verifyTokenAndAuthorization,async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Product Deleted"});
    } catch (error) {
        res.status(401).send("error in deleting");
    }
})

// Get cart
router.get("/find:id",verifyTokenAndAuthorization,async (req, res) => {
    try {
        const order=await Order.findById(req.params.id);
        res.status(200).send(order);
    } catch (error) {
        res.status(401).send("error in getting a user");
    }
})

// get all cart products
// query get by using ?new=true
router.get("/",verifyTokenAndAdmin,async (req, res) => {
    try {
        const order = await Order.find();
        res.status(200).json(order);
      } catch (err) {
        res.status(500).json(err);
      }
  });  

//   get monthly income
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports =router;