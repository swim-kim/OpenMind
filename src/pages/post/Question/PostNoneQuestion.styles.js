import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  background: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  max-width: 1200px;
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

const EmptyStateContainer = styled.div`
  background: #f5f1ee;
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid #e4d5c9;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 50px;
`;

const EmptyStateIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const EmptyStateText = styled.span`
  font-family: 'Actor', sans-serif;
  font-size: 20px;
  color: #542f1a;
`;

const EmptyImage = styled.img`
  width: 150px;
  height: 154px;
  margin-top: 60px;
  margin-bottom: 30px;
`;

const FloatingButton = styled.button`
  padding: 12px 24px;
  border-radius: 200px;
  background: #542f1a;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: 'Actor', sans-serif;
  font-size: 20px;
  line-height: 25px;
  position: fixed;
  right: 20px;
  bottom: 20px;
`;

const Toast = styled.div`
  padding: 12px 20px;
  background: #000;
  color: #fff;
  border-radius: 8px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  line-height: 18px;
`;

export {
  Container,
  Header,
  ProfilePhotoLarge,
  UsernameLarge,
  ShareButtons,
  ShareButton,
  ShareIcon,
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateText,
  EmptyImage,
  FloatingButton,
  Toast,
};