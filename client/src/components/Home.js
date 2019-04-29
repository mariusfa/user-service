import React from "react";
import styled from "styled-components";
import { LogoutButton } from './Buttons'

function Home() {

  function onLogout() {
    localStorage.removeItem('token');
    window.location.replace('/')
  }

  return (
    <div>
      <LogoutButton onClick={onLogout}>Log out</LogoutButton>
    </div>
  );
}

export default Home;
