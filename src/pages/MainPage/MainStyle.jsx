import styled from "styled-components";

// Styled Components
const Container = styled.div`
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  padding-top: 240px;
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  height: 832px;
  position: relative;
`;

const Logo = styled.img`
  width: 456px;
  height: 186px;
  margin-top: 20px;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 32px;
  border-radius: 16px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 400px;
  height: auto;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #ffffff;
  border: 1px solid #818181;
  border-radius: 8px;
  gap: 12px;
`;

const InputIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #818181;
  width: 100%;
  ::placeholder {
    color: #818181;
  }
`;

const GoToAnswerButton = styled.button`
  padding: 16px 110px;
  background: #542f1a;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-top: 20px;
  &:hover {
    background: #341d0e;
  }

  &:disabled {
    background-color: #d3d3d3;
    color: #a9a9a9;
    cursor: not-allowed;
  }
`;

const GoToQuestionsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #f5f1ee;
  border-radius: 8px;
  border: 1px solid #542f1a;
  color: #542f1a;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  position: absolute;
  top: 45px;
  right: 20px;
  &:hover {
    background: #e5e1dd;
  }
`;

const ArrowIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export {
  Container,
  Logo,
  BackgroundImage,
  FormContainer,
  InputContainer,
  InputIcon,
  Input,
  GoToAnswerButton,
  GoToQuestionsButton,
  ArrowIcon,
};