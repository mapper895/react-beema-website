import React from "react";
import styled from "styled-components";
import TopSection from "./topSection";

const Homepage = () => {
  return (
    <PageContainer>
      <TopSection />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default Homepage;
