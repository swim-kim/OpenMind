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
  margin-bottom: 30px;
`;

const ProfilePhoto = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ProfilePhotoLarge = styled(ProfilePhoto)`
  width: 136px;
  height: 136px;
`;

const Username = styled.h4`
  font-family: 'Actor', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #000;
`;

const UsernameLarge = styled.h1`
  font-family: 'Actor', sans-serif;
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
  background: #f5f1ee;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #c7bbb5;
  box-sizing: border-box;
  margin-bottom: 30px;
  width: 100%;
  max-width: 620px;
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

const FeedCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FeedCard = styled.div`
  width: 520px;
  background: #ffffff;
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AnswerInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`;

const InputText = styled.textarea`
  width: 420px;
  max-height: 154px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  color: #818181;
  display: flex;
  align-items: center;
  height: 154px;
  line-height: 22px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 24px;
  background: ${props => props.background || '#542f1a'};
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  line-height: 22px;
  &:disabled {
    background:#c7bbb5;
    color:#D9D9D9
  }
`;

const ButtonSecondary = styled.button`
  width: 100%;
  padding: 12px 24px;
  background: #542f1a;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  line-height: 22px;
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

const RejectionItem = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 6px;
  width: 320px;
  cursor: pointer;
`;

const ReactionText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #818181;
`;

const StyledReactionIcon = styled.svg`
  width: 16px;
  height: 16px;
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

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const CommentUsername = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  font-family: 'Actor', sans-serif;
  font-size: 18px;
  color: #000;
`;


const CommentText = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  padding: 1px;
  background: ${props => props.background || '#f9f9f9'};
  border-radius: 8px;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  color: ${props => props.color || '#818181'};
  line-height: 22px;
`;

const TimeAgo = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #818181;
  margin-left: 108px;
`;

const RejectButton = styled.span`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  color: ${props => (props.rejection ? '#b93333' : '#000000')};
  display: ${props => (props.rejection ? 'inline' : 'none')};
`;

export {
  Container,
  Header,
  ProfilePhoto,
  ProfilePhotoLarge,
  Username,
  UsernameLarge,
  ShareButtons,
  ShareButton,
  ShareIcon,
  FeedContainer,
  FeedHeader,
  FeedIcon,
  FeedTitle,
  FeedCardHeader,
  FeedCard,
  QuestionHeader,
  AnswerInputContainer,
  InputText,
  Button,
  ButtonSecondary,
  ReactionSection,
  ReactionItem,
  ReactionText,
  StyledReactionIcon,
  ActionButton,
  CommentContent,
  CommentUsername,
  CommentText,
  TimeAgo,
  RejectButton,
  RejectionItem,
};