import React from 'react';

import {
  Container,
  Card,
  ProfilePhotoWrapper,
  Frame,
  FrameHeader,
  Username,
  TimeAgo,
  InputText,
  Button,
  SampleText,
} from './Answer.styles';

import { ReactComponent as ProfilePhoto } from '../../assets/figma.named.svg/profile-photo.svg';

const Answer = () => {
  return (
    <Container>
      <Card>
        <ProfilePhotoWrapper size="large">
          <ProfilePhoto />
        </ProfilePhotoWrapper>
        <Frame>
          <FrameHeader>
            <Username size="large">아초는고양이</Username>
          </FrameHeader>
          <InputText>답변을 입력해주세요</InputText>
          <Button>답변 완료</Button>
        </Frame>
      </Card>

      <Card>
        <ProfilePhotoWrapper size="large">
          <ProfilePhoto />
        </ProfilePhotoWrapper>
        <Frame>
          <FrameHeader>
            <Username size="large">아초는고양이</Username>
            <TimeAgo size="large">2주전</TimeAgo>
          </FrameHeader>
          <SampleText>
            그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도,
            전인 방황하였으며, 대한 바이며, 이것이야말로 가치를 청춘의 따뜻한
          </SampleText>
        </Frame>
      </Card>

      <Card>
        <ProfilePhotoWrapper size="large">
          <ProfilePhoto />
        </ProfilePhotoWrapper>
        <Frame>
          <FrameHeader>
            <Username size="large">아초는고양이</Username>
            <TimeAgo size="large">2주전</TimeAgo>
          </FrameHeader>
          <SampleText rejection>답변 거절</SampleText>
        </Frame>
      </Card>
    </Container>
  );
};

export default Answer;