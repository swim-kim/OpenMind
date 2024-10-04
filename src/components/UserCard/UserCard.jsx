import React from 'react';

import {
  UserCardContainer,
  Card,
  StyledProfilePhoto,
  UserName,
  InfoRow,
  StyledIcon,
  InfoText,
  Count,
} from './UserCard.styles';

import { ReactComponent as ProfilePhoto } from '../../assets/figma.named.svg/profile-photo.svg';
import { ReactComponent as ProfilePhoto2 } from '../../assets/figma.named.svg/profile-photo-2.svg';

const UserCard = ({ device, photoSrc, userName, questionCount }) => {
  const PhotoComponent = photoSrc === ProfilePhoto ? ProfilePhoto : ProfilePhoto2;
  return (
    <Card device={device}>
      <StyledProfilePhoto as={PhotoComponent} device={device} />
      <UserName device={device}>{userName}</UserName>
      <InfoRow>
        <InfoText device={device}>
          <StyledIcon device={device} />
          받은 질문
        </InfoText>
        <Count device={device}>{questionCount}개</Count>
      </InfoRow>
    </Card>
  );
};

const SampleUserCard = () => {
  return (
    <UserCardContainer>
      <UserCard
        device="Mobile"
        photoSrc={ProfilePhoto2}
        userName="아초는고양이"
        questionCount="9"
      />
      <UserCard
        device="PC"
        photoSrc={ProfilePhoto}
        userName="아초는고양이"
        questionCount="9"
      />
    </UserCardContainer>
  );
};

export default SampleUserCard;
