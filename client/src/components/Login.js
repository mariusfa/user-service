import React, { useState, useContext } from "react";
import styled from "styled-components";
import { LoginButton } from "./Buttons";
import { Input } from "./Inputs";
import { API_URL } from "../AppConfig";
import { UserContext }  from "../contexts/UserContext";
import { ErrorContainer } from "./MessageContainers";

const LoginContainer = styled.div`
  text-align: center;
`;

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const userContext = useContext(UserContext);

  function changeUsername(event) {
    setUsername(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  function onLogin() {
    setIsError(false);
    fetch(API_URL + "/api/auth/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw Error();
        }
      })
      .then(res => {
        localStorage.setItem("token", res.token);
        props.history.push('/');
        userContext.setData(username);
        console.log(userContext);
      })
      .catch(error => {
        setIsError(true);
        console.log(error);
      });
  }

  return (
    <LoginContainer>
      <Input
        placeholder="Username"
        value={username}
        onChange={changeUsername}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={changePassword}
      />
      <LoginButton onClick={onLogin}>Login</LoginButton>
      { isError &&
        <ErrorContainer>
          Failed to login. Please try again!
        </ErrorContainer>
      }
    </LoginContainer>
  );
}

export default Login;
