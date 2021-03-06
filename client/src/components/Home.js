import React, { useContext } from "react";
import styled from "styled-components";
import { LogoutButton } from './Buttons'
import { UserContext } from "../contexts/UserContext";

const HomeContainer = styled.div`
  text-align: center;
`

const WelcomeContainer = styled.p`
  font-size: 2em;
  font-family: sans-serif;
  color: darkblue;
`;

function Home() {
  const userContext = useContext(UserContext);

  function onLogout() {
    localStorage.removeItem('token');
    
    window.location.replace('/');
  }

  return (
    <HomeContainer>
      <WelcomeContainer>
        Welcome {userContext.user} 
      </WelcomeContainer>
      <LogoutButton onClick={onLogout}>Log out</LogoutButton>
    </HomeContainer>
  );
}

export default Home;
