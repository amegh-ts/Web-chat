import React, { useState } from 'react'
import {styled} from 'styled-components'
import { Loginapicall } from './Apicall';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Container=styled.div`
    width: 50%;
    height: 500px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 150px;
    margin-left: 25%;
    `;
const Input=styled.input`
    width: 100%;
    height: 35px;
    margin-bottom: 3.5em;
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;
`;
const Btn=styled.button`
    width: 100%;
    height: 35px;
    background-color: #5886cc;
    border: 2px solid black;
    border-radius: 5px;
`;
const Headline=styled.p`
    font-size: 38px;
    font-weight: bold;
    text-align: center;
`;

const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const formdata=new FormData
  formdata.append('email',email)
  formdata.append('password',password)

const display = (e)=>{
e.preventDefault();
console.log('formdata',formdata);
Loginapicall({email,password},dispatch)
}

  return (
    <Container>
         <Headline>Login : - </Headline>
      <form onSubmit={display} encType='multipart/form-data'>
        <Input type='text' placeholder='email' required={true} value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Input type='password' placeholder='Password' required={true} value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Btn type='submit'>Login</Btn>
        <Link to={'signup'}><p>Signup</p></Link>
      </form> 
    </Container>
  )
}

export default Login
