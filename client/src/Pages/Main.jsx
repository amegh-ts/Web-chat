import React, { useEffect, useState } from 'react'
import User from './User'
import Message from './Message'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import axios from 'axios'
const Container=styled.div`
display:flex ;
background-color: #d4d4d4;
`;

const Main = () => {
  const user=useSelector((state)=>state.loginuser.userData)
  
  const [conversation,setConversation]=useState([])

  useEffect(()=>{
    const getConversation =async(userId)=>{
try{
const res=await axios.get(`http://localhost:7000/api/conversation/${userId}`)
setConversation(res.data)
}catch(err){
  console.log(err);
}
    }
    getConversation(user[0]?._id)

  },[user])

  useEffect(()=>{

  },[])

  return (
    <>
    <Navbar/>
    <Container>
      {conversation.map((li)=>(
    <User conversation={li} ownUser={user}/>
      ))}
  <Message />
    </Container>
    </>
  )
}

export default Main
