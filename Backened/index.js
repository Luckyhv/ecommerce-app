const mongodb=require('./db');
const express=require("express");
var cors = require('cors');

mongodb();
const app=express();
const port=7000;

app.use(cors());
app.use(express.json());
app.use('/api/user',require('./routes/user'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/product',require('./routes/product'));
app.use('/api/cart',require('./routes/cart'));
app.use('/api/order',require('./routes/order'));


app.listen(port,()=>{
    console.log(`app listening on port http://localhost:${port}`);
});