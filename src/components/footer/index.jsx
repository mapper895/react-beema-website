import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import Logo from "../logo";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterContainer>
      <Marginer direction="vertical" margin="5em" />
      <Logo small />

      <Marginer direction="vertical" margin="1em" />
      <MotivationalText>Just say the magical word</MotivationalText>
      <MotivationalText>and we will do the rest</MotivationalText>
      <Marginer direction="vertical" margin="1em" />
      <Button>Start your project</Button>
      <Marginer direction="vertical" margin="5em" />
      <AccessibilityContainer>
        <PrivacyContainer>
          <Link>Privacy Policy</Link>
          <Link>Terms of service</Link>
          <Link>Contact</Link>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
        </SocialContainer>
      </AccessibilityContainer>
      <RightReserved>&copy; 2021 Beema All Rights Reserved</RightReserved>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  margin-top: 8em;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: #1f1f1f;
  align-items: center;
  position: relative;
`;

const MotivationalText = styled.h2`
  margin: 0;
  font-size: 25px;
  line-height: 1.4;
  font-weight: normal;
  color: #ffff;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 12px;
  padding-right: 8px;
  padding-left: 8px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: #adadad;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  font-size: 15px;

  &:not(:last-of-type) {
    margin-right: 12px;

    @media screen and (max-width: 480px) {
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
`;

export default Footer;
