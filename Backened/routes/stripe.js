const express=require("express");
const router=express.Router();
const stripe=require("stripe");
require('dotenv').config();

router.post("/payment",(req,res)=>{
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "INR",
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
});

module.exports=router;