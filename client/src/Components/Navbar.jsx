import React from 'react'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/redux';
const Container=styled.div`
display:flex ;
width: 98%;
height: 50px;
background-color: #1f1f1f;
border-radius: 20px;
border:1px solid grey;
margin-left: 5px;
margin-left: 5px;
margin-top: 2px;
`;

const Headline=styled.p`
    margin-top: 10px;
    margin-left: 50%;
    font-size: 32px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    font-style: italic;
    color:#d4d4d4 ;
`;

const Logout=styled.button`
    width: 70px;
    height: 40px;
    font-size: 17px;
    border: none;
    background-color:#1f1f1f ;
    position: absolute;
    top: .5em;
    right: 2em;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color:#d4d4d4 ;
    cursor: pointer;
`;

const Name=styled.div`
font-size:19px ;
color:white ;
margin:7px ;
`;

const Profile =styled.img`
border-radius:20px ;
`



const Navbar = () => {
  
  const dispatch=useDispatch()
  const user=useSelector((state)=>state.loginuser.userData)
  console.log(user);

const LogoutUser=()=>{
dispatch(logoutUser())
}

  return (
    <Container>
      <Profile src={`/Images/${user[0].image}`}/>
      <Name>{user[0]?.name}</Name>
        <Logout onClick={LogoutUser}>Logout</Logout>
      <Headline>Dark-Web</Headline>
    </Container>
  )
}

export default Navbar
