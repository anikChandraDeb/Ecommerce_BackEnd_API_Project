const express=require('express');
const rateLimit=require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');

const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');
const mongoose =require('mongoose');
const path = require("path");
const router=require('./src/routes/api');
const {MONGODB_CONNECTION}=require("./src/config/config");
const app = express();

//Global Application Middleware
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended: false}));
app.use(hpp());
app.use(helmet());
app.use(mongoSanitize())
app.use(xss())
//Rate Limiter
const limiter = rateLimit({windowMs:15*60*1000,max:3000});
app.use(limiter);

//Web Caching Mechanism
app.set('etag',false);
//MongoDB Connection
mongoose.connect(MONGODB_CONNECTION)
.then((result)=>{
    console.log('MongoDB Connected');
}).catch((err)=>{
    console.log(err);
})

//Set API Route
app.use('/api',router);

//Set Application Storage
app.use(express.static('storage'));

module.exports=app;