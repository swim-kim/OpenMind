import styled from 'styled-components';
import { ReactComponent as MoreIcon } from '../../../assets/figma.named.svg/icon-more.svg';
import { ReactComponent as ProfilePhoto } from '../../../assets/figma.named.svg/profile-photo.svg';

// Styled Components
const Container = styled.div`
  background: #f5f1ee;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
`;

const FeedCard = styled.div`
  width: 620px;
  background: #ffffff;
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FeedCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 516px;
`;

const StyledMoreIcon = styled(MoreIcon)`
  width: 26px;
  height: 26px;
`;

const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Badge = styled.div`
  display: inline-block;
  padding: 4px 12px;
  background: #fff;
  border: 1px solid #542f1a;
  border-radius: 8px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #542f1a;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #818181;
`;

const QuestionText = styled.p`
  font-family: 'Actor', sans-serif;
  font-size: 18px;
  color: #000;
`;

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledProfilePhoto = styled(ProfilePhoto)`
  width: 48px;
  height: 48px;
`;

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const CommentUsername = styled.div`
  font-family: 'Actor', sans-serif;
  font-size: 18px;
  color: #000;
`;

const TimeAgo = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #818181;
  margin-left: 108px;
`;

const CommentText = styled.div`
  padding: 16px;
  background: ${props => props.background || '#f9f9f9'};
  border-radius: 8px;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  color: ${props => props.color || '#818181'};
  line-height: 22px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 24px;
  background: ${props => props.background || '#c7bbb5'};
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  line-height: 22px;
  margin-top: 28px;
`;

const ReactionFooter = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 25px;
`;

const Reaction = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StyledReactionIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

const ReactionText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  color: ${props => props.color || '#818181'};
`;

const ColumnTitle = styled.h2`
  font-family: 'Actor', sans-serif;
  font-size: 32px;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
`;

export {
  Container,
  FeedCard,
  FeedCardHeader,
  StyledMoreIcon,
  QuestionContent,
  Badge,
  QuestionHeader,
  QuestionText,
  CommentSection,
  CommentHeader,
  StyledProfilePhoto,
  CommentContent,
  CommentUsername,
  TimeAgo,
  CommentText,
  Button,
  ReactionFooter,
  Reaction,
  StyledReactionIcon,
  ReactionText,
  ColumnTitle,
};
