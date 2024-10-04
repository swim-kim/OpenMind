import styled from 'styled-components';
import { ReactComponent as IconMessages } from '../../assets/figma.named.svg/icon-messages.svg';
import { ReactComponent as ProfilePhoto } from '../../assets/figma.named.svg/profile-photo.svg';

// Styled Components for Mobile and PC designs
const UserCardContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => (props.device === 'PC' ? '20px' : '16px')};
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #818181;
  width: ${props => (props.device === 'PC' ? '180px' : '188px')};
  height: ${props => (props.device === 'PC' ? '147px' : '155px')};
`;

const StyledProfilePhoto = styled(ProfilePhoto)`
  width: ${props => (props.device === 'PC' ? '60px' : '48px')};
  height: ${props => (props.device === 'PC' ? '60px' : '48px')};
  border-radius: 50%;
`;

const UserName = styled.div`
  font-family: 'Actor', sans-serif;
  font-weight: 400;
  font-size: ${props => (props.device === 'PC' ? '20px' : '18px')};
  line-height: ${props => (props.device === 'PC' ? '25px' : '24px')};
  color: #000000;
  margin-top: ${props => (props.device === 'PC' ? '12px' : '12px')};
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  font-family: 'Pretendard', sans-serif;
  color: #818181;
`;

const StyledIcon = styled(IconMessages)`
  width: ${props => (props.device === 'PC' ? '18px' : '16px')};
  height: ${props => (props.device === 'PC' ? '18px' : '16px')};
  margin-right: 4px;
`;

const InfoText = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => (props.device === 'PC' ? '16px' : '14px')};
  line-height: ${props => (props.device === 'PC' ? '22px' : '18px')};
`;

const Count = styled.div`
  font-size: ${props => (props.device === 'PC' ? '16px' : '14px')};
  line-height: ${props => (props.device === 'PC' ? '22px' : '18px')};
`;

export {
  UserCardContainer,
  Card,
  StyledProfilePhoto,
  UserName,
  InfoRow,
  StyledIcon,
  InfoText,
  Count,
};