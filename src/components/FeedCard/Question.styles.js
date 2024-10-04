import styled from 'styled-components';

// Styled Components

const CardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #9747ff;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  max-width: ${(props) => (props.device === 'PC' ? '600px' : '95%')};
  margin: 10px 0;
`;

const Header = styled.div`
  display: flex;
  gap: 8px;
`;

const TimeAgo = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #818181;
`;

const QuestionText = styled.p`
  font-family: 'Actor', sans-serif;
  font-weight: 400;
  font-size: ${(props) => (props.device === 'PC' ? '18px' : '16px')};
  line-height: ${(props) => (props.device === 'PC' ? '24px' : '22px')};
  color: #000000;
  margin: 12px 0;
`;

export {
  CardContainer,
  Header,
  TimeAgo,
  QuestionText,
};
