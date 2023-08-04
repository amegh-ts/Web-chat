const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    mobile:{type:Number},
    password:{type:String},
    image:{type:String}
},{timestamps:true})

module.exports=mongoose.model('user',userSchema) 