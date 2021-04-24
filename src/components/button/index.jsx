import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const Button = (props) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  padding: 7px 15px;
  border-radius: 5px;
  background-color: ${theme.primary};
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: 2px solid transparent;
  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    background: transparent;
    border: 2px solid ${theme.primary};
  }
`;

export default Button;
