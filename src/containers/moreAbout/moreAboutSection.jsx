import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import AboutImgUrl from "../../assets/illustrations/rocket_launch_.png";

const MoreAboutSection = () => {
  return (
    <MoreAboutContainer>
      <SectionTitle>More About Beema</SectionTitle>
      <AboutContainer>
        <AboutText>
          Beema is about designing, building and delivering best quality
          software for your company.
          <br />
          <br />
          We make sure that you get the best software inferstracture and set of
          applications to ensure the best experience of your clients. <br />
          <br />
          So wether you are handling thousand of payment transactions or you´re
          just starting out, you are in the right place.
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
};

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const AboutContainer = styled.div`
  display: flex;
  max-width: 1000px;
  align-items: center;
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;
`;

export default MoreAboutSection;
