import React from "react";
import styled from "styled-components";

const StyledFloatingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 208px;
  height: 54px;
  border-radius: 200px;
  color: var(--gray-10);
  background-color: var(--brown-40);
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const FloatingButton = ({ onModalOpen }) => {
  const handleButtonClick = () => {
    onModalOpen(true);
  };

  return (
    <StyledFloatingButton onClick={handleButtonClick}>
      질문 작성하기
    </StyledFloatingButton>
  );
};

export default FloatingButton;