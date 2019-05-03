import styled from 'styled-components';

const TabButton = styled.button`
  color: ${props => props.theme.main}
  background-color: white;
  border: ${props => props.clicked ? "2px solid " + props.theme.main : "none" };
  width: 50%;
  outline: none;
  padding: 0.3rem;
  font-size: 1.5rem;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const DefaultButton = styled.button`
  color: white;
  background-color: ${props => props.theme.main};
  width: 10rem;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1em;

  &:hover {
    cursor: pointer;
  }
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