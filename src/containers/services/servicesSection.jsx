import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import OurService from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";
//Images
import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesSection = () => {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Best Quality Software</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurService
        title="Fully integrated services"
        description="We build and deliver fully integrated webapps with customized control panels that fit your company needs"
        imgUrl={Service1Img}
      />
      <OurService
        isReversed
        title="Mobily Optimized"
        description="You could see your  app in any device. Our developers guarantee the best adaptation to the screen, it doesn´t matter the size"
        imgUrl={Service2Img}
      />
      <OurService
        title="Quality is our priority"
        description="We have teams of professional developers, designers and managers that ensures delivering the best software quality for your company"
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
};

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export default ServicesSection;
