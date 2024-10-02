import React from "react";
import styled from "styled-components";
import "../styles/global.css";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  border: none;
  gap: 8px;
  background-color: ${({ mode }) => {
    switch (mode) {
      case "getQuestion":
        return "var(--brown-40)";
      case "goToReply":
      case "askQuestion":
        return "var(--brown-10)";
      default:
        return "var(--brown-40)";
    }
  }};

  color: ${({ mode }) => {
    switch (mode) {
      case "getQuestion":
        return "var(--gray-10)";
      case "goToReply":
      case "askQuestion":
        return "var(--brown-40)";
      default:
        return "var(--gray-10)";
    }
  }};

  outline: ${({ mode }) => {
    switch (mode) {
      case "getQuestion":
        return "none";
      case "goToReply":
      case "askQuestion":
        return "1px solid var(--brown-40);";
      default:
        return "none";
    }
  }};

  &:hover {
    outline: ${({ mode }) => {
      switch (mode) {
        case "getQuestion":
          return "2px solid var(--brown-50)";
        case "goToReply":
        case "askQuestion":
          return "2px solid var(--brown-40)";
        default:
          return "2px solid var(--brown-50)";
      }
    }};
  }

  &:active {
    outline: ${({ mode }) => {
      switch (mode) {
        case "getQuestion":
          return "none";
        case "goToReply":
        case "askQuestion":
          return "2px solid var(--brown-40)";
        default:
          return "none";
      }
    }};

    background-color: ${({ mode }) => {
      switch (mode) {
        case "getQuestion":
          return "var(--brown-50)";
        case "goToReply":
        case "askQuestion":
          return "var(--brown-20)";
        default:
          return "var(--brown-50)";
      }
    }};
  }

  &:disabled {
    background-color: ${({ mode }) => {
      switch (mode) {
        case "getQuestion":
          return "var(--brown-30)";
        case "goToReply":
        case "askQuestion":
          return "var(--brown-10)";
        default:
          return "var(--brown-30)";
      }
    }};
  }

  @media (min-width: 375px) and (max-width: 766px) {
    ${({ mode }) =>
      (mode === "goToReply" || mode === "askQuestion") &&
      `
    padding: 8px 12px;
    font-size: 14px;
    line-height: 12px;
    gap: 4px;
  `}

    width: ${({ mode }) => {
      switch (mode) {
        case "getQuestion":
          return "257px";
        case "goToReply":
        case "askQuestion":
          return "130px";
        default:
          return "257px";
      }
    }};

    height: ${({ mode }) => {
      switch (mode) {
        case "getQuestion":
          return "46px";
        case "goToReply":
        case "askQuestion":
          return "34px";
        default:
          return "46px";
      }
    }};
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    width: ${({ mode }) => {
      switch (mode) {
        case "getQuestion":
          return "336px";
        case "goToReply":
        case "askQuestion":
          return "166px";
        default:
          return "336px";
      }
    }};

    height: ${({ mode }) => {
      switch (mode) {
        case "getQuestion":
          return "46px";
        case "goToReply":
        case "askQuestion":
          return "46px";
        default:
          return "46px";
      }
    }};
  }

  @media (min-width: 1025px) {
    width: ${({ mode }) => {
      switch (mode) {
        case "getQuestion":
          return "336px";
        case "goToReply":
        case "askQuestion":
          return "166px";
        default:
          return "336px";
      }
    }};

    height: ${({ mode }) => {
      switch (mode) {
        case "getQuestion":
          return "46px";
        case "goToReply":
        case "askQuestion":
          return "46px";
        default:
          return "46px";
      }
    }};
  }
`;

const ArrowIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const CustomButton = ({ mode = "getQuestion", onClick, disabled = false }) => {
  const buttonText =
    {
      getQuestion: "질문 받기",
      goToReply: "답변하러 가기",
      askQuestion: "질문하러 가기",
    }[mode] || "버튼";

  return (
    <StyledButton mode={mode} onClick={onClick} disabled={disabled}>
      {buttonText}
      {(mode === "goToReply" || mode === "askQuestion") && (
        <ArrowIcon src="" alt="Arrow Icon" />
      )}
    </StyledButton>
  );
};

export default CustomButton;
