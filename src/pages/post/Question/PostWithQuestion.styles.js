import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  background: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePhotoLarge = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const UsernameLarge = styled.h1`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 32px;
  color: #000;
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const ShareButton = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 200px;
  background: ${(props) => props.bgColor};
  cursor: pointer;
`;

const ShareIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const FeedContainer = styled.div`
  width: 620px;
  background: #f5f1ee;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #c7bbb5;
  box-sizing: border-box;
  margin-bottom: 30px;
`;

const FeedHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const FeedIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const FeedTitle = styled.div`
  font-family: 'Actor', sans-serif;
  font-size: 20px;
  color: #542f1a;
`;

const FeedCard = styled.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 20px;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
`;
const Badge = styled.div`
  padding: 4px 12px;
  border-radius: 8px;
  background: ${(props) => props.background || '#fff'};
  color: ${(props) => props.color || '#542f1a'};
  border: 1px solid ${(props) => props.border || '#c7bbb5'};
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionText = styled.p`
  font-family: 'Actor', sans-serif;
  font-size: 18px;
  color: #000;
  margin-top: 10px;
`;

const ReactionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Reaction = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ReactionText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  color: #818181;
`;

const ActionButton = styled.button`
  padding: 12px 24px;
  border-radius: 200px;
  background: #542f1a;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  position: fixed;
  right: 20px;
  bottom: 20px;
`;

export {
  Container,
  Header,
  ProfilePhotoLarge,
  UsernameLarge,
  ShareButtons,
  ShareButton,
  ShareIcon,
  FeedContainer,
  FeedHeader,
  FeedIcon,
  FeedTitle,
  FeedCard,
  QuestionHeader,
  Badge,
  QuestionText,
  ReactionFooter,
  Reaction,
  ReactionText,
  ActionButton,
};