import styled from 'styled-components';

import { ReactComponent as MoreIcon } from '../../assets/figma.named.svg/icon-more.svg';
import { ReactComponent as ProfilePhoto } from '../../assets/figma.named.svg/profile-photo.svg';

// Styled Components
const Container = styled.div`
  border: 10px solid #000000;
  width: 100%;
  max-width: 1539px;
  min-height: 1259px;
  padding: 20px;
  box-sizing: border-box;
`;

const FeedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: #ffffff;
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  background: #ffffff;
  border: 1px solid #542f1a;
  border-radius: 8px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #542f1a;
`;

const StyledMoreIcon = styled(MoreIcon)`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const QuestionHeader = styled.div`
  display: flex;
  gap: 8px;
`;

const QuestionTime = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #818181;
`;

const QuestionText = styled.div`
  font-family: 'Actor', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
`;

const AnswerSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
`;

const StyledProfilePhoto = styled(ProfilePhoto)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const AnswerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const AnswerHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const AnswerText = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-top: 4px;
  line-height: 22px;
`;

const AnswerUserName = styled.span`
  font-family: 'Actor', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
`;

const AnswerTime = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #818181;
  margin-left: 8px;
  margin-top: 3px;
`;

const ReactionSection = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 24px;
`;

const ReactionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const StyledReactionIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

const ReactionText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #818181;
`;

export {
  Container,
  FeedCardContainer,
  Header,
  Badge,
  StyledMoreIcon,
  QuestionSection,
  QuestionHeader,
  QuestionTime,
  QuestionText,
  AnswerSection,
  StyledProfilePhoto,
  AnswerContent,
  AnswerHeader,
  AnswerText,
  AnswerUserName,
  AnswerTime,
  ReactionSection,
  ReactionItem,
  StyledReactionIcon,
  ReactionText,
};
