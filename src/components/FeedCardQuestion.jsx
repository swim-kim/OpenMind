import React from 'react'
import styled from 'styled-components';

const FeedCardQuestionWrapper = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const FeedCardQuestionBox = styled.div`
  width:100%;
  display:flex;
  gap:2px;
  color: var(--Grayscale-40, #818181);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px; 
`;

const FeedCardQuestionText = styled.div`
  color: var(--Grayscale-60, #000);
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const elapsedTime = (date) => {
	const start = new Date(date);
	const end = new Date();

	const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
	if (seconds < 60) return '방금 전';

	const minutes = seconds / 60;
	if (minutes < 60) return `${Math.floor(minutes)}분 전`;

	const hours = minutes / 60;
	if (hours < 24) return `${Math.floor(hours)}시간 전`;

	const days = hours / 24;
	return `${Math.floor(days)}일 전`;
};

function FeedCardQuestion({ question }) {
  return (
    <FeedCardQuestionWrapper>
        <FeedCardQuestionBox>
            <div>질문 · </div>
            <div>{elapsedTime(question.createdAt)}</div>
        </FeedCardQuestionBox>
        <FeedCardQuestionText>
           {question.content}
        </FeedCardQuestionText>
    </FeedCardQuestionWrapper>
  )
}

export default FeedCardQuestion