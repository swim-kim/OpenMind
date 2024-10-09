import React from "react";
import styled from "styled-components";

const StyledFloatingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 54px;
  padding: 12px 24px;
  gap: 8px;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  border-radius: 200px;
  color: var(--gray-10);
  background-color: var(--brown-40);
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const FloatingButton = ({ onClick }) => {
  const handleButtonClick = () => {
    onClick(true);
  };

  return (
    <StyledFloatingButton onClick={handleButtonClick}>
      질문 작성하기
    </StyledFloatingButton>
  );
};

export default FloatingButton;
