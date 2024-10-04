import React from 'react';
import {
  Container,
  FeedCard,
  FeedCardHeader,
  StyledMoreIcon,
  QuestionContent,
  Badge,
  QuestionHeader,
  QuestionText,
  CommentSection,
  CommentHeader,
  StyledProfilePhoto,
  CommentContent,
  CommentUsername,
  TimeAgo,
  CommentText,
  Button,
  ReactionFooter,
  Reaction,
  StyledReactionIcon,
  ReactionText,
  ColumnTitle,
} from './EditAnswer.styles';

// import { ReactComponent as MoreIcon } from '../../../assets/figma.named.svg/icon-more.svg';
import { ReactComponent as ThumbsUpIcon } from '../../../assets/figma.named.svg/icon-thumbs-up.svg';
import { ReactComponent as ThumbsDownIcon } from '../../../assets/figma.named.svg/icon-thumbs-down.svg';
import { ReactComponent as MoreIcon2 } from '../../../assets/figma.named.svg/icon-more-2.svg';
import { ReactComponent as ThumbsUpIcon2 } from '../../../assets/figma.named.svg/icon-thumbs-up-2.svg';
import { ReactComponent as ThumbsDownIcon2 } from '../../../assets/figma.named.svg/icon-thumbs-down-2.svg';
import { ReactComponent as MoreIcon3 } from '../../../assets/figma.named.svg/icon-more-3.svg';
import { ReactComponent as ThumbsUpIcon3 } from '../../../assets/figma.named.svg/icon-thumbs-up-3.svg';
import { ReactComponent as ThumbsDownIcon3 } from '../../../assets/figma.named.svg/icon-thumbs-down-3.svg';
import { ReactComponent as ProfilePhoto2 } from '../../../assets/figma.named.svg/profile-photo-2.svg';
import { ReactComponent as ProfilePhoto3 } from '../../../assets/figma.named.svg/profile-photo-3.svg';

// Main Component
const EditAnswer = () => {
  return (
    <Container>
      {/* Column 1: 수정하기 메뉴 */}
      <div>
        <ColumnTitle>수정하기 메뉴</ColumnTitle>
        <FeedCard>
          <FeedCardHeader>
            <Badge>미답변</Badge>
            <StyledMoreIcon />
          </FeedCardHeader>

          <QuestionContent>
            <QuestionHeader>
              질문 · 2주전
            </QuestionHeader>
            <QuestionText>좋아하는 동물은?</QuestionText>
          </QuestionContent>

          <CommentSection>
            <CommentHeader>
              <StyledProfilePhoto />
              <StyledMoreIcon />
            </CommentHeader>
            <CommentContent>
              <CommentUsername>아초는고양이</CommentUsername>
              <TimeAgo>2주전</TimeAgo>
              <CommentText background="#fff">
                그들을 불러 귀는 이상의 오직 피고...
              </CommentText>
            </CommentContent>
          </CommentSection>

          <ReactionFooter>
            <Reaction>
              <StyledReactionIcon as={ThumbsUpIcon} />
              <ReactionText color="#1877f2">좋아요 12</ReactionText>
            </Reaction>
            <Reaction>
              <StyledReactionIcon as={ThumbsDownIcon} />
              <ReactionText color="#818181">싫어요</ReactionText>
            </Reaction>
          </ReactionFooter>
        </FeedCard>
      </div>

      {/* Column 2: 수정중 */}
      <div>
        <ColumnTitle>수정중</ColumnTitle>
        <FeedCard>
          <FeedCardHeader>
            <Badge>미답변</Badge>
            <StyledMoreIcon as={MoreIcon2} />
          </FeedCardHeader>

          <QuestionContent>
            <QuestionHeader>
              질문 · 2주전
            </QuestionHeader>
            <QuestionText>좋아하는 동물은?</QuestionText>
          </QuestionContent>

          <CommentSection>
            <CommentHeader>
              <StyledProfilePhoto as={ProfilePhoto2} />
              <StyledMoreIcon as={MoreIcon2} />
            </CommentHeader>
            <CommentContent>
              <CommentUsername>아초는고양이</CommentUsername>
              <TimeAgo>2주전</TimeAgo>
              <CommentText>
                귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다...
              </CommentText>
              <Button background="#542f1a">수정 완료</Button>
            </CommentContent>
          </CommentSection>

          <ReactionFooter>
            <Reaction>
              <StyledReactionIcon as={ThumbsUpIcon2} />
              <ReactionText>좋아요 12</ReactionText>
            </Reaction>
            <Reaction>
              <StyledReactionIcon as={ThumbsDownIcon2} />
              <ReactionText>싫어요</ReactionText>
            </Reaction>
          </ReactionFooter>
        </FeedCard>
      </div>

      {/* Column 3: 내용을 다 지웠을 때 */}
      <div>
        <ColumnTitle>내용을 다 지웠을 때</ColumnTitle>
        <FeedCard>
          <FeedCardHeader>
            <Badge>미답변</Badge>
            <StyledMoreIcon as={MoreIcon3} />
          </FeedCardHeader>

          <QuestionContent>
            <QuestionHeader>
              질문 · 2주전
            </QuestionHeader>
            <QuestionText>좋아하는 동물은?</QuestionText>
          </QuestionContent>

          <CommentSection>
            <CommentHeader>
              <StyledProfilePhoto as={ProfilePhoto3} />
              <StyledMoreIcon as={MoreIcon3} />
            </CommentHeader>
            <CommentContent>
              <CommentUsername>아초는고양이</CommentUsername>
              <TimeAgo>2주전</TimeAgo>
              <CommentText>
                <input type="text" placeholder="답변을 입력해주세요" style={{ width: '100%', border: 'none', background: 'transparent', color: '#818181', fontSize: '16px' }} />
              </CommentText>
              <Button>수정 완료</Button>
            </CommentContent>
          </CommentSection>

          <ReactionFooter>
            <Reaction>
              <StyledReactionIcon as={ThumbsUpIcon3} />
              <ReactionText>좋아요 12</ReactionText>
            </Reaction>
            <Reaction>
              <StyledReactionIcon as={ThumbsDownIcon3} />
              <ReactionText>싫어요</ReactionText>
            </Reaction>
          </ReactionFooter>
        </FeedCard>
      </div>
    </Container>
  );
};

export default EditAnswer;
