import React, { useState } from "react";
import styled from 'styled-components';
import { LoginButton } from './Buttons';
import { Input } from './Inputs';

function Login() {

    return(
        <div>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <LoginButton>Login</LoginButton>
        </div>
    )
}

export default Login;