import React from "react";
import styled from "styled-components";

const OurService = ({ title, description, imgUrl, isReversed }) => {
  return (
    <ServiceContainer isReversed={isReversed}>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Details>{description}</Details>
      </DescriptionContainer>
      <ServiceImg src={imgUrl} />
    </ServiceContainer>
  );
};

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 4em;
`;

const ServiceImg = styled.img`
  width: 22em;
  height: 17em;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
`;

const Title = styled.h3`
  color: #000;
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0;
`;

const Details = styled.p`
  color: #7a7a7a;
  font-size: 21px;
  text-align: center;
  max-width: 55%;
`;

export default OurService;
