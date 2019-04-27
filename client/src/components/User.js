import React, { useState } from "react";
import { TabButton } from './Buttons';
import styled from 'styled-components';

const UserContainer = styled.div`
  margin: 1rem auto;
  border: none;
  width: 50%;
`;

const TabContainer = styled.div`
  width: 100%;
  padding: 0;
`;

function User() {
  const [isLogin, setLogin] = useState(true);

  function onSelect() {
    setLogin(!isLogin);
  }

  return (
    <UserContainer>
      <TabContainer>
        <TabButton clicked={isLogin} onClick={onSelect}>
          Login
        </TabButton>
        <TabButton clicked={!isLogin} onClick={onSelect}>
          Register
        </TabButton>
      </TabContainer>
      {isLogin ? <div>Login</div> : <div>Register</div>}
    </UserContainer>
  );
}

export default User;
