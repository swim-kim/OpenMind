import React from 'react';
import {
  Container,
  Header,
  ProfilePhotoLarge,
  UsernameLarge,
  FeedContainer,
  FeedHeader,
  FeedTitle,
  FeedCard,
  QuestionHeader,
  Badge,
  QuestionText,
  ReactionFooter,
  Reaction,
  ReactionText,
  ActionButton,
} from './PostWithQuestion.styles';

import { ReactComponent as HeaderIllustration } from '../../../assets/figma.named.svg/group-34.svg';
import { ReactComponent as ProfilePhoto } from '../../../assets/figma.named.svg/profile-photo.svg';
import { ReactComponent as MessagesIcon } from '../../../assets/figma.named.svg/icon-messages.svg';
import { ReactComponent as ThumbsUpIcon } from '../../../assets/figma.named.svg/icon-thumbs-up.svg';
import { ReactComponent as ThumbsDownIcon } from '../../../assets/figma.named.svg/icon-thumbs-down.svg';
import { useNavigate } from 'react-router-dom';
import LinkAndShareButton from '../../../components/Button/ShareButton';

// Main Component
const PostWithQuestion = () => {
  const navigate = useNavigate()

  const handleGoToWriteQuestion = () => {
    navigate("/post/question/PostWriteQuestion")
  }

  return (
    <Container>
      <Header>
        <HeaderIllustration width="1200" height="234" />
        <ProfilePhotoLarge as={ProfilePhoto} />
        <UsernameLarge>아초는고양이</UsernameLarge>
        <LinkAndShareButton />
      </Header>

      <FeedContainer>
        <FeedHeader>
          <MessagesIcon />
          <FeedTitle>3개의 질문이 있습니다</FeedTitle>
        </FeedHeader>

        <FeedCard>
          <Badge background="#fff" border="#542f1a">답변 완료</Badge>
          <QuestionHeader>
            <span style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: '14px', color: '#818181' }}>
              질문 · 2주전
            </span>
          </QuestionHeader>
          <QuestionText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur modi aliquam praesentium perspiciatis? Facere, dolorum! Magni quibusdam iste est soluta qui cupiditate dolorum repudiandae natus asperiores, ex ad voluptatibus? Sunt, explicabo.
          </QuestionText>

          <ReactionFooter>
            <Reaction>
              <ThumbsUpIcon />
              <ReactionText>좋아요 12</ReactionText>
            </Reaction>
            <Reaction>
              <ThumbsDownIcon />
              <ReactionText>싫어요</ReactionText>
            </Reaction>
          </ReactionFooter>
        </FeedCard>

        <FeedCard>
          <Badge background="#fff" border="#542f1a">답변 완료</Badge>
          <QuestionHeader>
            <span style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: '14px', color: '#818181' }}>
              질문 · 2주전
            </span>
          </QuestionHeader>
          <QuestionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad sunt ex ipsam culpa fuga nihil!
          </QuestionText>

          <ReactionFooter>
            <Reaction>
              <ThumbsUpIcon />
              <ReactionText>좋아요 12</ReactionText>
            </Reaction>
            <Reaction>
              <ThumbsDownIcon />
              <ReactionText>싫어요</ReactionText>
            </Reaction>
          </ReactionFooter>
        </FeedCard>

        <FeedCard>
          <Badge background="#fff" border="#542f1a" color="#b93333">답변 거절</Badge>
          <QuestionHeader>
            <span style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: '14px', color: '#818181' }}>
              질문 · 2주전
            </span>
          </QuestionHeader>
          <QuestionText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quisquam voluptatibus sint numquam! Animi ratione, excepturi necessitatibus deleniti autem unde dicta quas officiis eaque.
          </QuestionText>

          <ReactionFooter>
            <Reaction>
              <ThumbsUpIcon />
              <ReactionText>좋아요 12</ReactionText>
            </Reaction>
            <Reaction>
              <ThumbsDownIcon />
              <ReactionText>싫어요</ReactionText>
            </Reaction>
          </ReactionFooter>
        </FeedCard>

      </FeedContainer>

      <ActionButton onClick={handleGoToWriteQuestion}>질문 작성하기</ActionButton>
    </Container>
  );
};

export default PostWithQuestion;