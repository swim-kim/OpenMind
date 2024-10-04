import React, { useEffect } from 'react';

import {
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
} from './PostWriteQuestion.styles';
import { useNavigate } from 'react-router-dom';

const Modal = ({ closeModal }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>
            <ModalIcon />
            질문을 작성하세요
          </ModalTitle>
          <CloseIcon onClick={closeModal} />
        </ModalHeader>
        <UserInfo>
          <span>To.</span>
          <ProfilePhoto />
          <UserName>아초는고양이</UserName>
        </UserInfo>
        <InputContainer>
          <TextInput placeholder="질문을 입력해주세요" />
          <SubmitButton>질문 보내기</SubmitButton>
        </InputContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

const PostWriteQuestion = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate(-1)
  };

  useEffect(() => {
    openModal();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* <button onClick={openModal}>Open Modal</button> */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default PostWriteQuestion;
