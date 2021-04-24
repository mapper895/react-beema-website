import React from "react";
import styled from "styled-components";
import BeemaLogo from "../../assets/logo/logo_croped.png";
import { theme } from "../../theme";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={BeemaLogo} />
      <LogoText>Beema</LogoText>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;
`;

const LogoText = styled.div`
  margin-top: 6px;
  font-size: 40px;
  color: ${theme.primary};
  font-weight: 900;
`;

export default Logo;
