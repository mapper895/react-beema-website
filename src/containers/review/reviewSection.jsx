import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import ReviewCard from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";

import "pure-react-carousel/dist/react-carousel.es.css";

import User1Img from "../../assets/pictures/profile_picture_1.jpg";
import User2Img from "../../assets/pictures/profile_picture_2.jpg";
import User3Img from "../../assets/pictures/profile_picture_3.jpg";
import User4Img from "../../assets/pictures/profile_picture_4.jpeg";

const ReviewSection = () => {
  return (
    <ReviewContainer>
      <SectionTitle>What others are saying about us</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={205}
        totalSlides={4}
        visibleSlides={2}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp pf their subject, and have created something great for us"
              username="John Connor"
              userImgUrl={User1Img}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp pf their subject, and have created something great for us"
              username="Megan Borguer"
              userImgUrl={User2Img}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp pf their subject, and have created something great for us"
              username="Konrad Kiera"
              userImgUrl={User3Img}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText="I very much enjoyed working with Beema and the team - they have an excellent grasp pf their subject, and have created something great for us"
              username="Saral Zusu"
              userImgUrl={User4Img}
            />
          </StyledSlide>
        </Slider>
        <SytledDotGroup />
      </StyledCarouselProvider>
    </ReviewContainer>
  );
};

const ReviewContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const SytledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;

  button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;

    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #888888;
  }
`;

export default ReviewSection;
