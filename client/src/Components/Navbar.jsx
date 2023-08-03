import React from 'react'
import { styled } from 'styled-components'

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
`


const Navbar = () => {
  

  return (
    <Container>
        <Logout>Logout</Logout>
      <Headline>Chat-Web</Headline>
    </Container>
  )
}

export default Navbar
