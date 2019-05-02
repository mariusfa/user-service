import React, { useState } from "react";
import styled from 'styled-components';
import { RegisterButton } from './Buttons';
import { Input } from './Inputs';
import  { API_URL } from '../AppConfig';

const RegisterContainer = styled.div`
  text-align: center;
`;

const SuccessContainer = styled.p`
  color: green;
`;

const ErrorContainer = styled.p`
  color: red;
`;

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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
    setError(false);
    setSuccess(false);

    if (password === password2) {
      fetch(API_URL + '/api/auth/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "username": username,
          "password": password
        })
      })
        .then(res => {
          if (res.ok) {
            setSuccess(true)
            setUsername("");
            setPassword("")
            setPassword2("");
          } else {
            throw Error()
          }
        })
        .catch(errorCaught => {
          setError(true);
        })
    } else {
      console.log("passwords does not match");
      setError(true);
    }
    
  }

  return (
    <RegisterContainer>
      <Input placeholder="Type username" value={username} onChange={changeUsername} />
      <Input type="password" value={password} onChange={changePassword} placeholder="Type password" />
      <Input type="password" placeholder="Re-type password" value={password2} onChange={changePassword2} />
      <RegisterButton onClick={onRegister}>Register</RegisterButton>
      { success && 
        <SuccessContainer>
          User registered. Please login!
        </SuccessContainer>
      }
      { error &&
        <ErrorContainer>
          User register failed. Please try again!
        </ErrorContainer>
      }
    </RegisterContainer>  
  );
}

export default Register;
