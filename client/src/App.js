import React from "react";
import styled from 'styled-components';
import User from './components/User';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return(
    <div>
      <AppHeader>
        <AppText>
          User service
        </AppText>
      </AppHeader>
      <Router>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/login/" component={User} />
      </Router>
    </div>
  );
}

export default App;
