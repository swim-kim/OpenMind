import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  ProfilePhotoLarge,
  UsernameLarge,
  ShareIcon,
  FeedContainer,
  FeedHeader,
  FeedIcon,
  FeedTitle,
  FeedCard,
  Badge,
  QuestionHeader,
  InputText,
  Button,
  ButtonSecondary,
  ReactionFooter,
  Reaction,
  ReactionText,
  ActionButton,
} from './WriteAnswer.styles';

import { ReactComponent as HeaderIllustration } from '../../../assets/figma.named.svg/group-34.svg';
import { ReactComponent as IconMessages } from '../../../assets/figma.named.svg/icon-messages.svg';
import { ReactComponent as IconThumbsUp } from '../../../assets/figma.named.svg/icon-thumbs-up.svg';
import { ReactComponent as IconThumbsDown } from '../../../assets/figma.named.svg/icon-thumbs-down.svg';
import LinkAndShareButton from '../../../components/Button/ShareButton';
import LocalStore from '../../../api/storage/LocalStore';

// Main Component
const WriteAnswer = () => {
  const navigate = useNavigate();
  const [subject] = useState(JSON.parse(LocalStore.getItem('subject')));

  if (!subject) {
    navigate(-1)
  }

  return (
    <Container>
      <Header>
        <HeaderIllustration width="1200" height="234" />
        <ProfilePhotoLarge src={subject.imageSource} />
        <UsernameLarge>{subject.name}</UsernameLarge>
        {/* 공유버튼으로 바꿔야함 */}
        <LinkAndShareButton />
      </Header>

      <FeedContainer>
        <FeedHeader>
          <FeedIcon as={IconMessages} />
          <FeedTitle>{subject.questionCount}개의 질문이 있습니다</FeedTitle>
        </FeedHeader>

        <FeedCard>
          <Badge background="#fff" border="#c7bbb5">미답변</Badge>
          <QuestionHeader>
            <UsernameLarge>{subject.name}</UsernameLarge>
          </QuestionHeader>
          <InputText>답변을 입력해주세요</InputText>
          <Button>답변 완료</Button>
        </FeedCard>

        <FeedCard>
          <Badge background="#fff" border="#c7bbb5">미답변</Badge>
          <QuestionHeader>
            <span style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: '14px', color: '#818181' }}>
              질문 · 2주전
            </span>
          </QuestionHeader>
          <InputText>답변 입력되면 버튼 활성화</InputText>
          <ButtonSecondary>답변 완료</ButtonSecondary>
        </FeedCard>

        <FeedCard>
          <Badge background="#fff" border="#c7bbb5">답변 완료</Badge>
          <QuestionHeader>
            <span style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: '14px', color: '#818181' }}>
              질문 · 2주전
            </span>
          </QuestionHeader>
          <p style={{ fontFamily: 'Pretendard', fontSize: '16px', color: '#000000', marginTop: '28px' }}>
            그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상, 인생의 만물은 피다...
          </p>
          <ReactionFooter>
            <Reaction>
              <ShareIcon as={IconThumbsUp} />
              <ReactionText>좋아요 12</ReactionText>
            </Reaction>
            <Reaction>
              <ShareIcon as={IconThumbsDown} />
              <ReactionText>싫어요</ReactionText>
            </Reaction>
          </ReactionFooter>
        </FeedCard>

      </FeedContainer>

      <ActionButton>삭제하기</ActionButton>
    </Container>
  );
};
export default WriteAnswer;