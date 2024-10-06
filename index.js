import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoute from './route/book-route.js';
import userRouter from './route/user.route.js';
import SupportRoute from './route/support.route.js';

 const app = express();
 app.use(cors());
 app.use(express.json());
 dotenv.config();
 const PORT = process.env.PORT || 3000;
 const URI = process.env.mongodbUrl;
  
 
  
  try {
    mongoose.connect(URI)
    console.log("conneted for mongodb "); 
    
  } catch (error) {
    console.log("error" ,error);
    
  }

  app.use("/book",bookRoute);
app.use("/user",userRouter);
app.use("/userssopport",SupportRoute)
  app.listen(PORT ,()=>{
    console.log(`server start ${PORT}`);
    
  });