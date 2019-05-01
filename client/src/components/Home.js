import React, { useContext } from "react";
import styled from "styled-components";
import { LogoutButton } from './Buttons'
import { UserContext } from "../contexts/UserContext";

const HomeContainer = styled.div`
  text-align: center;
`

function Home() {
  const userContext = useContext(UserContext);

  function onLogout() {
    localStorage.removeItem('token');
    console.log(userContext.data);
    
    window.location.replace('/');
  }

  return (
    <HomeContainer>
      <p>
        Welcome {userContext.data} 
      </p>
      <LogoutButton onClick={onLogout}>Log out</LogoutButton>
    </HomeContainer>
  );
}

export default Home;
