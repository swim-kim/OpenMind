import styled, { css } from 'styled-components';

// Styled Components
const InputContainer = styled.div`
  width: 100%;
  max-width: 304px;
  height: 108px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid transparent;
  box-sizing: border-box;
  ${(props) =>
    props.state === 'Focusing' &&
    css`
      border-color: #542f1a;
    `}
  display: flex;
  align-items: center;
`;

const InputText = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
  resize: none;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => (props.state === 'Placeholder' ? '#818181' : '#000000')};

  ::placeholder {
    color: #818181;
  }
`;

export { InputContainer, InputText };