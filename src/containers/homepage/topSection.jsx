import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/company_team.jpg";
import Button from "../../components/button";
import DownArrow from "../../components/downArrow";
import Logo from "../../components/logo";
import { Marginer } from "../../components/marginer";
import Navbar from "../../components/navbar";

const TopSection = () => {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };

  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          <Navbar />
          <Marginer direction="vertical" margin="8em" />
          <Logo />
          <Marginer direction="vertical" margin="4em" />
          <MotivationalText>Software Development</MotivationalText>
          <MotivationalText>From the Best in the Industry</MotivationalText>
          <Marginer direction="vertical" margin="2em" />
          <Button>Start your project</Button>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
};

const TopContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(53, 53, 53, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h2`
  margin: 0;
  font-size: 34px;
  line-height: 1.4;
  font-weight: normal;
  color: #ffff;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
`;
export default TopSection;
