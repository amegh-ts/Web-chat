const router=require('express').Router()
const Message=require('../Models/Message')

//Post method
router.post('/',async (req,res)=>{
    const newMessage=new Message(req.body)
    try{
const savedMessage=await newMessage.save();
res.status(200).json(savedMessage)
    }catch(err){
        res.status(500).json(err)
    }
});

//Get method
router.get('/:conversationId',async (req,res)=>{
try{
const savedMessage=await Message.find({conversationId:req.params.conversationId});
res.status(200).json(savedMessage)
}catch(err){
    res.status(500).json(err)
}
});

module.exports=router;

