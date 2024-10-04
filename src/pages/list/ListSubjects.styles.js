import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/figma.named.svg/logo.svg';
import { ReactComponent as Messages } from '../../assets/figma.named.svg/icon-messages.svg';

// Styled Components
const Container = styled.div`
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;

const StyledLogo = styled(Logo)`
  width: 146px;
  height: 57px;
  margin-top: 40px;
`;

const Title = styled.h1`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 40px;
  line-height: 47.73px;
  color: #000000;
  text-align: center;
  margin-top: 50px;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 231px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #000000;
  cursor: pointer;
`;

const DropdownText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  margin-right: auto;
`;

const ArrowIcon = styled.svg`
  width: 14px;
  height: 14px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 40px;
  padding: 4px 0;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  margin-top: 4px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => (props.selected ? '#1877f2' : '#515151')};
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const UserCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 50px;
`;

const UserCard = styled.div`
  width: 180px;
  height: 147px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #818181;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background: #e1e2e3;
    color: #ffffff;
    cursor: pointer;
  }
`;

const ProfilePhoto = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const UserName = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #000000;
  margin-top: 12px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: auto;
  font-family: 'Pretendard', sans-serif;
  color: #818181;
`;

const InfoText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 22px;
  color: #818181;
`;

const MessageIcon = styled(Messages)`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;

const Count = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #818181;
`;

const PaginationContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const PaginationItem = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Actor', sans-serif;
  font-size: 20px;
  line-height: 25px;
  color: ${(props) => (props.selected ? '#542f1a' : '#818181')};
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
    border-radius: 5px;
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
  font-family: 'Pretendard', sans-serif;
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

export {
  Container,
  StyledLogo,
  Title,
  DropdownContainer,
  Dropdown,
  DropdownText,
  ArrowIcon,
  DropdownMenu,
  MenuItem,
  UserCardContainer,
  UserCard,
  ProfilePhoto,
  UserName,
  InfoRow,
  InfoText,
  MessageIcon,
  Count,
  PaginationContainer,
  PaginationItem,
  GoToQuestionsButton,
};