import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import session from "express-session";
const app=express();
const PORT=process.env.PORT||7544;
const database=`mongodb://localhost:27017`;
import router from "./route/Userroute.js";
async function CoonectingDta()
{
    try{
    const coonecting=await mongoose.connect(database);
    console.log(coonecting.connection.host)
    }
    catch(e)
    {
        console.log(e);
    }
    
 
}
app.use(session({
    secret: 'yourSecretKey',  // Change this to a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Set secure to true if using HTTPS in production
}));
app.use(express.json());
app.use(cors(
    {
    origin:'http://localhost:3000',  // Your React frontend URL
    credentials: true
    }
));
 
app.use("/api/auth",router)

CoonectingDta()
.then(()=>
{
    app.listen(PORT,()=>
    {
        console.log(`we are on port ${PORT}`)
    })
})
.catch((error)=>
{
    console.log(error);
})