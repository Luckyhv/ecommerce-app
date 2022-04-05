const express=require("express");
const router=express.Router();
const Cart=require("../models/Cart");
const {verifytoken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require('../middleware/verifytoken');


// Create
router.post("/",verifytoken,async(req,res)=>{
    const newcart = new Cart(req.body);
    try {
      const savedcart = await newcart.save();
      res.status(200).json(savedcart);
    } catch (err) {
      res.status(500).json(err);
    }
})

// Update cart
router.put("/:id",verifyTokenAndAuthorization ,async (req, res) => {
    try {
        const updatedcart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(updatedcart);
    } catch (error) {
        res.status(401).send("error in updating");
    }
})

// Delete cart
router.delete("/:id",verifyTokenAndAuthorization,async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Product Deleted"});
    } catch (error) {
        res.status(401).send("error in deleting");
    }
})

// Get cart
router.get("/find:id",verifyTokenAndAuthorization,async (req, res) => {
    try {
        const cart=await Cart.findById(req.params.id);
        res.status(200).send(cart);
    } catch (error) {
        res.status(401).send("error in getting a user");
    }
})

// get all cart products
// query get by using ?new=true
router.get("/",verifyTokenAndAdmin,async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
      } catch (err) {
        res.status(500).json(err);
      }
  });  
  
module.exports =router;