import styled from 'styled-components';

const TabButton = styled.button`
  color: cornflowerblue;
  background-color: white;
  border: ${props => props.clicked ? "2px solid cornflowerblue" : "none" };
  width: 50%;
  outline: none;
`;

const DefaultButton = styled.button`
  color: white;
  background-color: cornflowerblue;
  width: 10rem;
  outline: none;
  border: none;
  border-radius: 2px;
  padding: 5px;
  font-size: 1em;
`;

const RegisterButton = DefaultButton;

const LoginButton = DefaultButton;

const LogoutButton = DefaultButton;

export { 
  TabButton,
  RegisterButton,
  LoginButton,
  LogoutButton
 };