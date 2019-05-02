import React, { useState } from "react";
import { TabButton } from './Buttons';
import styled from 'styled-components';
import Register from './Register';
import Login from './Login';

const UserContainer = styled.div`
  margin: 1rem auto;
  border: none;
  width: 50%;
`;

const TabContainer = styled.div`
  width: 100%;
  margin: 2rem;
`;

function User(props) {
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
      {isLogin ? <Login history={props.history}/> : <Register/>}
    </UserContainer>
  );
}

export default User;
