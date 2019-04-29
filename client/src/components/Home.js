import React, { useContext } from "react";
import styled from "styled-components";
import { LogoutButton } from './Buttons'
import { UserContext } from "../contexts/UserContext";

function Home() {
  const userContext = useContext(UserContext);

  function onLogout() {
    localStorage.removeItem('token');
    console.log(userContext.data);
    
    window.location.replace('/');
  }

  return (
    <div>
      <div>
        Welcome {userContext.data} 
      </div>
      <LogoutButton onClick={onLogout}>Log out</LogoutButton>
    </div>
  );
}

export default Home;
