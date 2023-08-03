import React from 'react'
import {styled} from 'styled-components'

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
  return (
    <Container>
         <Headline>Login : - </Headline>
      <form>
        <Input type='text'/>
        <Input type='password'/>
        <Btn type='submit'>Login</Btn>
      </form>
    </Container>
  )
}

export default Login
