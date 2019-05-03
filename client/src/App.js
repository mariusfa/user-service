import React, { useContext } from "react";
import styled from "styled-components";
import User from "./components/User";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { UserProvider, UserContext } from "./contexts/UserContext";
import { API_URL } from "./AppConfig";

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

function PrivateRoute({ component: Component, ...rest }) {
  const userContext = useContext(UserContext);

  function validate() {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(API_URL + "/api/auth/validate", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: token
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.username) {
            userContext.setUser(res.username);
          } else {
            throw Error("Unauthorized");
          }
        })
        .catch(error => {
          localStorage.removeItem("token");
          window.location.replace("/login");
        });
      return true;
    } else {
      return false;
    }
  }

  return (
    <Route
      {...rest}
      render={props =>
        validate() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

function App() {
  return (
    <UserProvider>
      <AppHeader>
        <AppText>User service</AppText>
      </AppHeader>
      <Router>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/login/" component={User} />
      </Router>
    </UserProvider>
  );
}

export default App;
