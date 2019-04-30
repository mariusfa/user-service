import React, { useState } from "react";
import styled from 'styled-components';
import { RegisterButton } from './Buttons';
import { Input } from './Inputs';
import  { API_URL } from '../AppConfig';

const RegisterContainer = styled.div`
`;

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [password2  , setPassword2] = useState("")

  function changeUsername(event) {
    setUsername(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  function changePassword2(event) {
    setPassword2(event.target.value);
  }

  function onRegister() {
    if (password === password2) {
      fetch(API_URL + '/api/auth/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "username": username,
          "password": password
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
        });
    } else {
      console.log("passwords does not match");
    }
    
  }

  return (
    <RegisterContainer>
      <Input placeholder="Type username" value={username} onChange={changeUsername} />
      <Input type="password" value={password} onChange={changePassword} placeholder="Type password" />
      <Input type="password" placeholder="Re-type password" value={password2} onChange={changePassword2} />
      <RegisterButton onClick={onRegister}>Register</RegisterButton>
    </RegisterContainer>  
  );
}

export default Register;
