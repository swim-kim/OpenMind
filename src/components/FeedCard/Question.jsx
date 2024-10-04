import React, { useState, useEffect } from 'react';

import {
  CardContainer,
  Header,
  TimeAgo,
  QuestionText,
} from './Question.styles';

const Question = ({ device, text }) => {
  return (
    <CardContainer device={device}>
      <Header>
        <TimeAgo>질문 · 2주전</TimeAgo>
      </Header>
      <QuestionText device={device}>{text}</QuestionText>
    </CardContainer>
  );
};

const SampleQuestion = () => {
  const [elapsedTimeString, setElapsedTimeString] = useState('2주전');
  const [questionContents, setQuestionContents] = useState('좋아하는 동물은?');
  const createdAt = new Date();

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
      return `${years}년 전`;
    } else if (months > 0) {
      return `${months}달 전`;
    } else if (weeks > 0) {
      return `${weeks}주 전`;
    } else if (days > 0) {
      return `${days}일 전`;
    } else if (hours > 0) {
      return `${hours}시간 전`;
    } else if (minutes > 0) {
      return `${minutes}분 전`;
    } else {
      return `${seconds}초 전`;
    }
  }

  useEffect(() => {
    setElapsedTimeString(getElapsedTimeString(createdAt));
  }, [elapsedTimeString, questionContents]);

  return (
    <CardContainer device={'PC'}>
      <Header>
        <TimeAgo>질문 · {elapsedTimeString}</TimeAgo>
      </Header>
      <QuestionText device={'PC'}>{questionContents}</QuestionText>
    </CardContainer>
  );
};
export default SampleQuestion;
