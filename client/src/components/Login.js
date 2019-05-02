import React, { useState, useContext } from "react";
import styled from "styled-components";
import { LoginButton } from "./Buttons";
import { Input } from "./Inputs";
import { API_URL } from "../AppConfig";
import { UserContext }  from "../contexts/UserContext";

const LoginContainer = styled.div`
  text-align: center;
`;

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);

  function changeUsername(event) {
    setUsername(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  function onLogin() {
    fetch(API_URL + "/api/auth/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("token", res.token);
        props.history.push('/');
        userContext.setData(username);
        console.log(userContext);
      })
      .catch(error => {
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
    </LoginContainer>
  );
}

export default Login;
