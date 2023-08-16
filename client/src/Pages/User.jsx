import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Container=styled.div`
width:20% ;
height:650px;
border:1px solid gray ;
border-radius:20px ;
background-color:#1f1f1f ;
display:flex ;
flex-direction:column ;
overflow:auto;
margin: 1em;
cursor: pointer;
`

const Info=styled.div`
width:94% ;
height:70px;
margin:2% ;
border-radius:20px ;
border:none ;
border:0.5px solid gray;
display:flex ;
align-items:center ;
justify-content:space-between ;
margin-bottom:2em ;
`
const Profilepic=styled.img`
height:50px;
width:30% ;
border-radius:17px ;
object-fit: cover;
`
const Name=styled.div`
width:57% ;
height:35px ;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
font-size:17px;
color:#d4d4d4;
display:flex ;
margin-top:17px ;
`;

const IsActive=styled.div`
width:15px ;
height:15px ;
background-color:red;
border-radius:10px ;
margin:4px ;
`;

const User = ({conversation,ownUser}) => {

  const [friendData,setfriendsData]=useState(null)

  const friendId=conversation.members.find((m)=> m !== ownUser[0]?._id)

  console.log("friendId",friendId,"own",ownUser[0]?._id);


useEffect(()=>{
const friendsDetails=async(friendId)=>{
  try{
    const res=await axios.get(`http://localhost:7000/api/signup?userId=${friendId}`)
    setfriendsData(res.data)
  }catch(err){
    console.log(err);
  }

}
friendsDetails(friendId)
},[conversation,ownUser])


console.log('****',friendData);

return (
    
    <Container>
      <Info>
<Profilepic src={`/Images/${friendData && friendData[0].image}`}></Profilepic>
   <Name> <IsActive/>{friendData && friendData[0].name}</Name>
      </Info>
    </Container>
  )
}

export default User
