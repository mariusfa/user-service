import React from "react";
import styled from 'styled-components';
import User from './components/User';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

function App() {
  return(
    <div>
      <AppHeader>
        <AppText>
          User service
        </AppText>
      </AppHeader>
      <Router>
        <Route path="/login/" component={User} />
      </Router>
    </div>
  );
}

export default App;
