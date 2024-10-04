import styled from 'styled-components';

import { ReactComponent as IconMessages2 } from '../../../assets/figma.named.svg/icon-messages-2.svg';
import { ReactComponent as IconClose } from '../../../assets/figma.named.svg/icon-close.svg';
import { ReactComponent as ProfilePhoto2 } from '../../../assets/figma.named.svg/profile-photo-2.svg';

// Styled Components
const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  width: 612px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Actor', sans-serif;
  font-size: 24px;
  color: #000000;
`;

const ModalIcon = styled(IconMessages2)`
  width: 28px;
  height: 28px;
`;

const CloseIcon = styled(IconClose)`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
  font-family: 'Actor', sans-serif;
  font-size: 18px;
  color: #000000;
`;

const ProfilePhoto = styled(ProfilePhoto2)`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const UserName = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`;

const TextInput = styled.textarea`
  width: 500px;
  height: 148px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  border: none;
  resize: none;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #818181;

  ::placeholder {
    color: #818181;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background: #c7bbb5;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-top: 8px;

  &:hover {
    background: #b3a59d;
  }
`;

export {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalIcon,
  CloseIcon,
  UserInfo,
  ProfilePhoto,
  UserName,
  InputContainer,
  TextInput,
  SubmitButton,
};
