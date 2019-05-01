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
`;

function Home() {
  const userContext = useContext(UserContext);

  function onLogout() {
    localStorage.removeItem('token');
    console.log(userContext.data);
    
    window.location.replace('/');
  }

  return (
    <HomeContainer>
      <WelcomeContainer>
        Welcome {userContext.data} 
      </WelcomeContainer>
      <LogoutButton onClick={onLogout}>Log out</LogoutButton>
    </HomeContainer>
  );
}

export default Home;
