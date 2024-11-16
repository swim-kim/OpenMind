import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as IconMessage } from "../assets/icon/Messages.svg";
import FloatingButton from "./Buttonfloating/Buttonfloating";
import "../styles/global.css";
import Modal from "./Modal";
import InputTextArea from "./InputTextArea";
import CustomButton from "./CustomButton";
import styled from "styled-components";

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  font-family: Actor, sans-serif;
  color: var(--gray-60);

  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .message_icon {
    margin-right: 8px;
    width: 22.75px;
    height: 22.75px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
  margin-bottom: 12px;

  .user_icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
  }
  span {
    display: flex;
    align-items: center;
  }
`;

const MessageIcon = () => {
  return (
    <Container className="icon_container">
      <h2>
        <IconMessage className="message_icon" />
        질문을 작성하세요
      </h2>
    </Container>
  );
};

const UserInformation = ({ name, imageSource }) => {
  return (
    <UserInfo>
      <span>
        To.
        <img className="user_icon" src={imageSource} alt={`${name}의 아이콘`} />
        {name}
      </span>
    </UserInfo>
  );
};

const QuestionModal = ({ name, imageSource, onQuestionAdded }) => {
  const { subjectId: subjectid } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setQuestionText("");
  };

  const handleSendQuestion = async () => {
    console.log("subjectid:", subjectid);
    if (!questionText.trim()) {
      alert("질문을 입력해주세요.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://openmind-api.vercel.app/10-1/subjects/${subjectid}/questions/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            subjectId: subjectid,
            content: questionText,
            team: "10-1",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send question.");
      }

      const result = await response.json();
      console.log("질문이 전송되었습니다.", result);

      closeModal();
      onQuestionAdded();
    } catch (error) {
      console.error("질문 전송에 실패하였습니다:", error);
      alert(`질문 전송에 실패하였습니다: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <FloatingButton onClick={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalBody>
          <MessageIcon />
          <UserInformation name={name} imageSource={imageSource} />
          <ContentWrapper>
            <InputTextArea
              mode="enterTheQuestion"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />
          </ContentWrapper>
          <ModalFooter>
            <CustomButton
              mode="SendQuestion"
              onClick={handleSendQuestion}
              disabled={!questionText.trim() || isLoading}
            >
              {isLoading ? "전송 중..." : "질문 보내기"}
            </CustomButton>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default QuestionModal;
