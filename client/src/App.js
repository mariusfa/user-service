import React, { Component } from "react";
import styled from 'styled-components';


const AppContainer = styled.div`
`;

const AppHeader = styled.div`
  padding: 1rem;
  height: 3rem;
  background-color: cornflowerblue;
  color: white;
`;

const AppText = styled.div`
  margin: auto;
  width: 40%;
  text-align: center;
  font-size: 3rem;
`;

const UserContainer = styled.div`
  margin: 1rem auto;
  border: 1px solid cornflowerblue;
  width: 50%;
`;


const LoginTabButton = styled.button`
  color: cornflowerblue;
  background-color: white;
  border: none;
  width: 50%;
`;
  

const RegisterTabButton = styled.button`
  color: cornflowerblue;
  background-color: white;
  border: 2px solid cornflowerblue;
  width: 50%;
`;

const TabContainer = styled.div`
  width: 100%;
  padding: 0;
`;

function App() {
  return(
    <div>
      <AppHeader>
        <AppText>
          User service
        </AppText>
      </AppHeader>
      <UserContainer>
        <TabContainer>
          <LoginTabButton>Login</LoginTabButton>
          <RegisterTabButton>Register</RegisterTabButton>
        </TabContainer>
        placeholder
      </UserContainer>
    </div>
  );
}

export default App;
