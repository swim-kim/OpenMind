import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  ProfilePhoto,
  ProfilePhotoLarge,
  Username,
  UsernameLarge,
  ShareButton,
  ShareIcon,
  FeedContainer,
  FeedHeader,
  FeedIcon,
  FeedTitle,
  FeedCardHeader,
  FeedCard,
  QuestionHeader,
  AnswerInputContainer,
  InputText,
  Button,
  ButtonSecondary,
  ReactionSection,
  ReactionItem,
  ReactionText,
  StyledReactionIcon,
  ActionButton,
  CommentContent,
  CommentUsername,
  CommentText,
  TimeAgo,
  RejectButton,
  RejectionItem,
} from './WriteAnswer.styles';

import { Badge } from './components/Badge/Badge';
import KebabButton from '../../components/KebabButton/KebabButton';
import iconEdit from '../../assets/figma.named.svg/icon-edit.svg';
import iconDelete from '../../assets/figma.named.svg/icon-close.svg';

import { ReactComponent as HeaderIllustration } from '../../assets/figma.named.svg/group-34.svg';
import { ReactComponent as IconMessages } from '../../assets/figma.named.svg/icon-messages.svg';
import { ReactComponent as ThumbsUpIcon } from '../../assets/figma.named.svg/icon-thumbs-up.svg';
import { ReactComponent as ThumbsDownIcon } from '../../assets/figma.named.svg/icon-thumbs-down.svg';
import LinkAndShareButton from './components/Button/ShareButton';
import LocalStorage from '../../api/storage/LocalStorage';
import * as API_Subjects from '../../api/swagger/Subjects';
import * as API_Questions from '../../api/swagger/Questions';
import * as API_Answers from '../../api/swagger/Answers';

const getElapsedTimeString = (date) => {
  const now = new Date();
  const diff = now - date;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  if (years > 0) {
    return `${years}년전`;
  } else if (months > 0) {
    return `${months}달전`;
  } else if (weeks > 0) {
    return `${weeks}주전`;
  } else if (days > 0) {
    return `${days}일전`;
  } else if (hours > 0) {
    return `${hours}시간전`;
  } else if (minutes > 0) {
    return `${minutes}분전`;
  } else {
    return `${seconds}초전`;
  }
};


// Main Component
const WriteAnswer = () => {
  const team = '10-1'
  const offset = 0;
  const limit = 10;

  const navigate = useNavigate();
  const [subject] = useState(LocalStorage.getItem('subject'));
  const [questions, setQuestions] = useState({});
  const [answers, setAnswers] = useState({})
  const [inputTextValue, setInputTextValue] = useState('')
  const [question, setQuestion] = useState(null);

  //TODO: 케밥메뉴 버튼 클릭 시 현재 quistion ID를 얻어야 한다.
  const handleKebabEditMenuClick = (question) => {
    console.log('수정하기 클릭', question);
  };

  const handleKebabDeleteMenuClick = (question) => {
    console.log('삭제하기 클릭', question);
  };

  const kebabMenuItems = [
    {
      label: '수정하기',
      icon: iconEdit,
      onClick: handleKebabEditMenuClick,
    },
    {
      label: '삭제하기',
      icon: iconDelete,
      onClick: handleKebabDeleteMenuClick,
    },
  ];



  const getQuestionsBySubjectId = async ({ team, subjectId, offset, limit }) => {
    try {
      const questions = await API_Subjects.subjects_questions_list(team, subjectId, limit, offset);
      setQuestions(questions);
    } catch (error) {
      console.error('getQuestionsBySubjectId():', error);
    }
  };

  const getFetchQuestions = async () => {
    try {
      const subjectId = subject?.id;
      getQuestionsBySubjectId({ team, subjectId, offset, limit });
    } catch (error) {
      console.error('getFetchQuestions():', error);
    }
  }

  const getAnswersByQuestionId = async ({ questionId }) => {
    try {
      const res = await API_Answers.answers_read(questionId);
      setAnswers(res);
    } catch (error) {
      console.error('getAnswersByQuestionId():', error);
    }
  };

  const getFetchAnswers = async (questionId) => {
    try {
      getAnswersByQuestionId({ questionId });
    } catch (error) {
      console.error('getFetchAnswers():', error);
    }
  }

  useEffect(() => {
    if (!subject) {
      console.log('localstorage에 선택된 subject가 존재하지 않습니다.');
      navigate('/');
    }

    getFetchQuestions();
    questions?.results?.forEach((question) => {
      getFetchAnswers(question?.id);
    });
  }, [subject, question]);

  const handleAnswerWriteButton = (questionId, isRejected, e) => {
    //TODO: '답변 거절' 버튼 클릭 시 isRejected 값이 true이면 axios리턴 400 에러 발생
    if (isRejected) {
      console.log('답변 거절 처리 완료')
      API_Questions.questions_answers_create(questionId, '답변 거절', isRejected, team)
    } else {
      console.log('답변 완료 처리 완료')
      API_Questions.questions_answers_create(questionId, inputTextValue, isRejected, team)
    }
  }

  return (
    <Container>
      <Header>
        <HeaderIllustration width="1200" height="234" />
        <ProfilePhotoLarge src={subject?.imageSource} />
        <UsernameLarge>{subject?.name + '(' + subject?.id + ')' || '아초는고양이'}</UsernameLarge>

        {/* 공유버튼으로 바꿔야함 */}
        <LinkAndShareButton />
      </Header>
      <FeedContainer>
        <FeedHeader>
          <FeedIcon as={IconMessages} />
          <FeedTitle>{subject?.questionCount}개의 질문이 있습니다</FeedTitle>
        </FeedHeader>
        {questions?.results && questions?.results.map((question) => (
          !question.answer ? ( //답변이 없는 경우
            <FeedCard key={question?.id}>
              <FeedCardHeader>
                <Badge>미답변</Badge>
                <KebabButton menuItems={kebabMenuItems} question={question} />
              </FeedCardHeader>
              <QuestionHeader>
                <span style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: '14px', color: '#818181' }}>
                  질문 · {getElapsedTimeString(new Date(question?.createdAt))}
                </span>
              </QuestionHeader>
              <p style={{ fontFamily: 'Pretendard', fontSize: '16px', color: '#000000' }}>
                {question?.content}
              </p>
              <CommentContent>
                <CommentText>
                  <ProfilePhoto src={subject?.imageSource} />
                  <CommentUsername>
                    <Username>{subject?.name + '(' + subject?.id + ')' || '아초는고양이'}</Username>
                    <InputText onChange={(e) => setInputTextValue(e.target.value)} placeholder='답변을 입력해주세요'></InputText>
                  </CommentUsername>
                </CommentText>
              </CommentContent>
              <Button disabled={!inputTextValue.length}
                onClick={(e) => {
                  handleAnswerWriteButton(question.id, false, e)
                }}
              >답변 완료</Button>
              <ReactionSection>
                <ReactionItem>
                  <StyledReactionIcon as={ThumbsUpIcon} />
                  <ReactionText>좋아요</ReactionText>
                </ReactionItem>
                <ReactionItem>
                  <StyledReactionIcon as={ThumbsDownIcon} />
                  <ReactionText>싫어요</ReactionText>
                </ReactionItem>
                <RejectionItem>
                  <RejectButton rejection={!inputTextValue.length}
                    onClick={(e) => {
                      handleAnswerWriteButton(question.id, true, e)
                    }}
                  >답변 거절</RejectButton>
                </RejectionItem>
              </ReactionSection>
            </FeedCard>
          ) : ( //답변이 있는 경우
            <FeedCard key={question?.id}>
              <FeedCardHeader>
                <Badge>답변 완료</Badge>
                <KebabButton menuItems={kebabMenuItems} question={question} />
              </FeedCardHeader>
              <QuestionHeader>
                <span style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: '14px', color: '#818181' }}>
                  질문 · {getElapsedTimeString(new Date(question?.createdAt))}
                </span>
              </QuestionHeader>
              <p style={{ fontFamily: 'Pretendard', fontSize: '16px', color: '#000000', marginTop: '1px' }}>
                {question?.isRejected ? '답변 거절' : question?.content}
              </p>
              <CommentContent>
                <CommentText>
                  <ProfilePhoto src={subject?.imageSource} />
                  <CommentUsername>
                    {/*TODO: 답변 작성시간 문자 크기 조정이 필요. ??? */}
                    <Username>{subject?.name + '(' + subject?.id + ') ' + getElapsedTimeString(new Date(question.answer?.createdAt)) || '아초는고양이'}</Username>
                    <p style={{ fontFamily: 'Pretendard', fontSize: '16px', color: '#000000' }}>
                      {question.answer?.content}
                    </p>
                  </CommentUsername>
                </CommentText>
              </CommentContent>
              {/*TODO: 좋아요, 싫어요 버튼 클릭 이벤트를 추가해야 함 */}
              <ReactionSection>
                <ReactionItem>
                  <StyledReactionIcon as={ThumbsUpIcon} />
                  <ReactionText>좋아요</ReactionText>
                </ReactionItem>
                <ReactionItem>
                  <StyledReactionIcon as={ThumbsDownIcon} />
                  <ReactionText>싫어요</ReactionText>
                </ReactionItem>
              </ReactionSection>
            </FeedCard>
          )
        ))}
      </FeedContainer>

      <ActionButton>삭제하기</ActionButton>
    </Container>
  );
};
export default WriteAnswer;