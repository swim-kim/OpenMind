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
function FeedCardQuestion() {
  return (
    <FeedCardQuestionWrapper>
        <FeedCardQuestionBox>
            <div>질문 · </div>
            <div>2주전</div>
        </FeedCardQuestionBox>
        <FeedCardQuestionText>
            좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?
        </FeedCardQuestionText>
    </FeedCardQuestionWrapper>
  )
}

export default FeedCardQuestion