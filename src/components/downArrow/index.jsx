import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const DownArrow = () => {
  return (
    <ArrowContainer>
      <ArrowIcon>
        <FontAwesomeIcon icon={faAngleDown} />
      </ArrowIcon>
    </ArrowContainer>
  );
};

const ArrowContainer = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(113, 113, 113, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    border: 2px solid ${theme.primary};
  }
`;

const ArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 28px;
`;

export default DownArrow;
