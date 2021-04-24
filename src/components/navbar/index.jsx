import React from "react";
import styled from "styled-components";
import Button from "../button";
import Logo from "../logo";
import { Marginer } from "../marginer";

const Navbar = () => {
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccesibilityContainer>
        <Button small>Get Started</Button>
        <Marginer direction="horizontal" margin="8px" />
        <LoginButton small>Login</LoginButton>
      </AccesibilityContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccesibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`;

export default Navbar;
