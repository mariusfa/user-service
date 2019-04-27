import React, { useState } from "react";
import styled from 'styled-components';
import { RegisterButton } from './Buttons';
import { Input } from './Inputs';

const RegisterContainer = styled.div`
`;

function Register() {

  function onRegister() {
    console.log("click")
  }

  return (
    <RegisterContainer>
      <Input placeholder="Type username" />
      <Input type="password" placeholder="Type password" />
      <Input type="password" placeholder="Re-type password" />
      <RegisterButton onClick={onRegister}>Register</RegisterButton>
    </RegisterContainer>  
  );
}

export default Register;
