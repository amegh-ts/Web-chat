const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const signupRouter=require('./Router/Signup')

dotenv.config()
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log(' mongoose are connected');
})

app.use(express.json());

app.use('/api/signup',signupRouter)

app.listen(7000,()=>{
    console.log('port 7000 is connected'); 
})