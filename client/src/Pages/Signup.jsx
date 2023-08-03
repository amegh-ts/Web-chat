import React from 'react'
import {styled} from 'styled-components'

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
  return (
    <Container>
    <Headline>Signup</Headline>
 <form>
   <Input type='text' placeholder='Name' required={true}/>
   <Input type='email' placeholder='E-mail' required={true}/>
   <Input type='tel' placeholder='Mobile' required={true}/>
   <Input type='password' placeholder='Password' required={true}/>
   <Input type='file'/>
   <Btn type='submit'>Signup</Btn>
 </form>
</Container>
  )
}

export default Signup
