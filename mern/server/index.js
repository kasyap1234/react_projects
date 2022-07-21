const express=require("express");
const app=express(); 
const userModel=require('./models/Users'); 
const cors=require("cors"); 

const mongoose=require("mongoose"); 
const usermodel = require("./models/Users");
mongoose.connect("mongodb+srv://database3:boruto@cluster0.fgwnq.mongodb.net/test").then(()=> console.log("connected to the database"))
app.use(express.json()); 

app.get("/getUsers",(req,res)=>{
usermodel.find({},(err,result)=>{
    if(err){
     res.json(err); 
           

    }
    else{
        res.json(result); 

    }
})
})

app.post("/createUser",async(req,res)=>{
    const user=req.body; 
    const newUser=new userModel(user); 
    await newUser.save() ; 

})
app.listen(9000, ()=>{
    console.log("server runs perfectly "); 

})

