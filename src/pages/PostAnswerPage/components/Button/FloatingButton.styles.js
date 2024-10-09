import styled from 'styled-components';

const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 30px;
  background-color: #542f1a;
  border: none;
  border-radius: 100px;
  padding: 12px 24px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:active {
    opacity: 0.8;
  }
`;

const ButtonText = styled.span`
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;

export { ButtonWrapper, ButtonText };