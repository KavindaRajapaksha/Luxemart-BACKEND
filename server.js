const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

require('dotenv').config();

const app=express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

PORT=process.env.PORT || 8000;

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})


