import React, { useState } from "react";
import styled from "styled-components";
import "../styles/global.css";

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  width: 100%;
  height: 100%;
  background-color: var(--gray-20);
  border-radius: 8px;
  padding: 16px;
  border: none;
  gap: 10px;
  color: var(--gray-60);

  &:focus {
    outline: 1px solid var(--brown-40);
  }
`;

const InputTextArea = ({ mode = "enterTheQuestion" }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const placeholderText =
    {
      enterTheQuestion: "질문을 입력해주세요",
      enterTheReply: "답변을 입력해주세요",
    }[mode] || "텍스트 입력";

  return (
    <StyledTextArea
      value={text}
      mode={mode}
      placeholder={placeholderText}
      onChange={handleChange}
    />
  );
};

export default InputTextArea;
