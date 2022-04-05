const mongoose=require("mongoose");
const url="mongodb+srv://Harsha:Luckyhv1@cluster0.8evel.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongodb=async()=>{
    mongoose.connect(url,()=>{
        console.log("Connected to mongodb");
    })
  }
  module.exports = mongodb;