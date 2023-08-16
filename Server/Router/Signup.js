const router=require('express').Router()
const user=require('../Models/Signupusers')
const Crypto_js=require('crypto-js')
const multer=require('multer')
const Jwt=require('jsonwebtoken')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'../client/public/Images/');
    },
    filename:(req,file,cb)=>{
      cb(null,file.originalname)
    } 
  }) 
  
  const upload=multer({storage:storage});

router.post('/',upload.single('image'),(req,res)=>{
    const newUser=new user({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        password:Crypto_js.AES.encrypt(req.body.password,process.env.Crypto_JS).toString(),
        image:req.file.originalname,
    })

    try{
const savedUser=newUser.save()
console.log(savedUser);
res.status(200).json(savedUser)
    }catch(err){
res.status(500).json(err)
    }
})

router.post('/login', async (req,res)=>{
  try{
    const userEmail=await user.findOne({email:req.body.email})
    !userEmail && res.status(401).json('Invalid Email')
    console.log('user',userEmail);
    const hashedPassword=Crypto_js.AES.decrypt(userEmail.password,process.env.Crypto_JS)
    console.log('hashedpassword',hashedPassword);
    const Password=hashedPassword.toString(Crypto_js.enc.Utf8);
    console.log('originalpassword',Password);
    Password !== req.body.password &&  res.status(401).json('Wrong password')
    const accessToken =Jwt.sign({
      id:userEmail._id
    },process.env.JWT_SEC,{expiresIn:'3d'});

    const {password,...others}=userEmail._doc
    console.log('final output',others,accessToken);

    res.status(200).json({...others,accessToken})
  }catch(err){
    res.status(500).json(err)
  }
}),

router.get('/',async (req,res)=>{
  const userId=req.query.userId
  try{
const userData=await user.find({_id:userId})
res.status(200).json(userData)
console.log('userData',userData);
  }catch(err){
    res.status(500).json(err)
  }
})

module.exports=router

