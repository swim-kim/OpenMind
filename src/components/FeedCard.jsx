import React from 'react';
import styled from 'styled-components';
import FeedCardQuestion from './FeedCardQuestion';
import DefaultImg from '../assets/default/default_profile.png';

const FeedCardContainer = styled.div`
  width: 620px;
  padding: 32px;
  border-radius: 16px;
  background: var(--Grayscale-10, #FFF);
  box-shadow: var(--box-shadow-1px);
`;

const FeedCardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FeedCardButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FeedCardAnswerContainer = styled.div`
  width:100%;
  display: flex;
  gap: 12px;
`;

const FeedCardUserProfile = styled.img`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 48px;
`;

const FeedCardAnswerBox = styled.div`
  width:100%;
  display: flex;
  gap: 4px;
  flex-direction: column;
`;
const FeedCardAnswerHead = styled.div`
  width:100%;
  display:flex;
  gap:8px;
  display: flex;
`;
const FeedCardAnswerWriter = styled.div`
  color: var(--Grayscale-60, #000);
  font-size: 18px;
  font-weight: 400;
  line-height: 24px; 

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
const FeedCardAnswerTime = styled.div`
  color: var(--Grayscale-40, #818181);
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display:flex;
  align-items: flex-end;
`;
const FeedCardAnswerText = styled.div`
  width:100%;
  color: var(--Grayscale-60, #000);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px; 
`;
const FeedCardLine = styled.hr`
  height: 1px;
  align-self: stretch;
  background: var(--Grayscale-30, #CFCFCF);
`;

const FeedCardReactionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;
const FeedCard = () => {
  return (
    <FeedCardContainer>
      <FeedCardBox>
        <FeedCardButtonWrapper>
          <div>답변완료</div>
          <div>더보기</div>
        </FeedCardButtonWrapper>
        <FeedCardQuestion />
        <FeedCardAnswerContainer>
          <FeedCardUserProfile src={DefaultImg} />
          <FeedCardAnswerBox>
            <FeedCardAnswerHead>
              <FeedCardAnswerWriter>아초는 고양이</FeedCardAnswerWriter>
              <FeedCardAnswerTime>2주전</FeedCardAnswerTime>
            </FeedCardAnswerHead>
            <FeedCardAnswerText>
            그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다. 
            </FeedCardAnswerText>
          </FeedCardAnswerBox>
        </FeedCardAnswerContainer>
        <FeedCardLine />
        <FeedCardReactionContainer>
          <div>좋아요</div>
          <div>싫어요</div>
        </FeedCardReactionContainer>
      </FeedCardBox>
    </FeedCardContainer>
  );
};

export default FeedCard;
