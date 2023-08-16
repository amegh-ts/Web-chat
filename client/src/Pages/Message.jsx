import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Container=styled.div`
background-color:aquamarine ;
width:75% ;
height:650px ;
margin: 1em;
border-radius: 20px;
border: 1px solid grey;
overflow: auto;
background-color:#1f1f1f;
background-image: url('Images/Message.jpg');
background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  z-index: 1;
`;

const Sender=styled.div`
  width: 40%;
  margin-left: 10%;
  margin-top: 5%;
  margin-right: 5%;
  height: 40px;
  background-color: #d4d4d4;
  border-radius: 20px;
  border: .5px solid grey;
  outline: none;
  font-size: 17px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
 text-align: center;
 z-index: 0;
`;

const Receiver=styled.div`
  width: 40%;
  margin-left: 50%;
  margin-top: 5%;
  height: 40px;
  background-color: #d4d4d4;
  border-radius: 20px;
  border: .5px solid grey;
  outline: none;
  font-size:17px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
 text-align: center;
 z-index: 0;
`;

const MessageBox=styled.input`
  width: 50%;
  height: 40px;
  position: absolute;
  bottom: 2em;
  left: 30%;
  border-radius: 20px;
  border: 1px solid gray;
  outline: none;
  font-size: 17px;
  text-align: center;
  background-color: #d4d4d4;
`;

const Send=styled.button`
background-color: #d4d4d4;
  width: 7%;
  height: 30px;
  position: absolute;
  bottom: 3.3em;
  left: 73%;
  border-radius: 7px;
  outline: none;
  border: none;
  :active{
    background-color: green;
    border-radius: 20px;
  }
`



const Message = () => {


  return (
    <Container>
      <Sender></Sender>
      <Receiver></Receiver>
      <MessageBox></MessageBox>
     <Send><span style={{fontSize:'40px',color:'green'}}  class="material-symbols-outlined">
send
</span></Send> 
   </Container>
  )
}

export default Message
