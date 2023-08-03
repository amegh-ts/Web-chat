import React from 'react'
import User from './User'
import Message from './Message'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar'

const Container=styled.div`
display:flex ;
background-color: #d4d4d4;
`;

const Main = () => {
  return (
    <>
    <Navbar/>
    <Container>
      <User/>
      <Message/>
    </Container>
    </>
  )
}

export default Main
