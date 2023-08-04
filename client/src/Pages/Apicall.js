import axios from 'axios'
import { addtoUser } from '../Redux/redux';


export const Signupapicall=async(formdata)=>{
    console.log('api checking',formdata);
    try{
const res=await axios.post('http://localhost:7000/api/signup',formdata)
console.log('***',res.data);
    }catch(err){
        console.log(err);
    }
} 

export const Loginapicall =async ({email,password},dispatch)=>{
    console.log('login api checking',email,password);
try{
    const res=await axios.post('http://localhost:7000/api/signup/login',{email,password})
    console.log('api call result',res.data);
    dispatch(addtoUser(res.data))
}catch(err){
    console.log(err);
}
}