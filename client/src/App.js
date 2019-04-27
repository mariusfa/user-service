import React, { useState } from "react";
import styled from 'styled-components';
import { TabButton } from './components/Buttons';


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
  border: none;
  width: 50%;
`;

const TabContainer = styled.div`
  width: 100%;
  padding: 0;
`;

function App() {
  const [isLogin, setLogin] = useState(true);

  function onSelect() {
    setLogin(!isLogin);
  }

  return(
    <div>
      <AppHeader>
        <AppText>
          User service
        </AppText>
      </AppHeader>
      <UserContainer>
        <TabContainer>
          <TabButton clicked={isLogin} onClick={onSelect}>Login</TabButton>
          <TabButton clicked={!isLogin} onClick={onSelect}>Register</TabButton>
        </TabContainer>
        {isLogin ? (
          <div>Login</div>
        ) : (
          <div>Register</div>
        )}
      </UserContainer>
    </div>
  );
}

export default App;
