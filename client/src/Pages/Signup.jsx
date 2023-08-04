import React, { useState } from 'react'
import {styled} from 'styled-components'
import { Signupapicall } from './Apicall';

const Container=styled.div`
    width: 50%;
    height: 600px;
    background-color: white;
    margin-top: 100px;
    margin-left: 29%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
const Input=styled.input`
    width: 70%;
    height: 35px;
    margin-bottom: 3.5em;
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;
    margin-left: 15%;
    font-size: 17px;
`;
const Btn=styled.button`
    width: 70%;
    height: 35px;
    background-color: #5886cc;
    border: 2px solid black;
    border-radius: 5px;
    margin-left: 15%;
`;
const Headline=styled.p`
    font-size: 38px;
    font-weight: bold;
    text-align: center;
`;

const Signup = () => {

const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [mobile,setMobile]=useState(Number)
const [password,setPassword]=useState('')
const [image,setImage]=useState({})

let formdata=new FormData()
formdata.append('name',name)
formdata.append('email',email)
formdata.append('mobile',mobile)
formdata.append('password',password)
formdata.append('image',image)



const display =(e)=>{
  e.preventDefault();
  console.log('first testing',formdata);
  Signupapicall(formdata)
}

  return (
    <Container>
    <Headline>Signup</Headline>
 <form onSubmit={display} encType='multipart/form-data'>
   <Input type='text' placeholder='Name' required={true}  value={name} onChange={(e)=>setName(e.target.value)}/>
   <Input type='email' placeholder='E-mail' required={true} value={email} onChange={(e)=>setEmail(e.target.value)}/>
   <Input type='tel' placeholder='Mobile' required={true} value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
   <Input type='password' placeholder='Password' required={true} value={password} onChange={(e)=>setPassword(e.target.value)}/>
   <Input type='file' filename='image'  onChange={(e)=>setImage(e.target.files[0])}/>
   <Btn type='submit'>Signup</Btn>
 </form>
</Container>
  )
}

export default Signup
