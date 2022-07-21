const mongoose=require('mongoose'); 
const UserSchema=new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
    },
    age: {
        type: Number, 
        required: true, 
    }, 
    username: {
        type: String, 
        required: true, 
    }
})
const usermodel=mongoose.model("Users",UserSchema); 
module.exports=usermodel; 
