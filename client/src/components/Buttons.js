import styled from 'styled-components';

const TabButton = styled.button`
  color: cornflowerblue;
  background-color: white;
  border: ${props => props.clicked ? "2px solid cornflowerblue" : "none" };
  width: 50%;
  outline: none;
`;

export { TabButton };