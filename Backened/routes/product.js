const express=require("express");
const router=express.Router();
const Product=require("../models/Product");
const {verifytoken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require('../middleware/verifytoken');


// Create
router.post("/createproduct",verifyTokenAndAdmin,async(req,res)=>{
    const newProduct = new Product(req.body);
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json({err:"not add"});
    }
})

// Update product
router.put("/:id",verifyTokenAndAdmin ,async (req, res) => {
    try {
        const updatedproduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedproduct);
    } catch (error) {
        res.status(401).send("error in updating");
    }
})

// Delete product
router.delete("/:id",verifyTokenAndAdmin,async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Product Deleted"});
    } catch (error) {
        res.status(401).send("error in deleting");
    }
})

// Get product
router.get("/find/:id",async (req, res) => {
    try {
        const product=await Product.findById(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(401).send("error in getting a user");
    }
})

// get all products
// query get by using ?new=true
router.get("/" ,async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });  
  
module.exports =router;