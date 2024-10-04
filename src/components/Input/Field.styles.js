import styled, { css } from 'styled-components';

// Styled Components
const InputContainer = styled.div`
  width: 100%;
  max-width: 304px;
  padding: 12px 16px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.state === 'Focusing' || props.state === 'Typing' ? '#542f1a' : '#818181')};
  display: flex;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
`;

const InputIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const InputText = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => (props.state === 'Placeholder' ? '#818181' : '#000000')};

  ::placeholder {
    color: #818181;
  }
`;

const TypingFrame = styled.div`
  display: flex;
  gap: -1px;
  align-items: center;
  width: 100%;
`;

export {
  InputContainer,
  InputIcon,
  InputText,
  TypingFrame,
};
