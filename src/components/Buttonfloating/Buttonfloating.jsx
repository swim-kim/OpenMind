import React from "react";
import "./Buttonfloating.css";

export const FloatingButton = ({ onModalOpen }) => {
  const handleButtonClick = () => {
    onModalOpen(true);
  };

  return (
    <button className="floating-button" onClick={handleButtonClick}>
      질문 작성하기
    </button>
  );
};
