import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  ProfilePhotoLarge,
  UsernameLarge,
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateText,
  EmptyImage,
  FloatingButton,
  Toast,
} from './PostNoneQuestion.styles';

import { ReactComponent as HeaderIllustration } from '../../../assets/figma.named.svg/group-34.svg';
import { ReactComponent as ProfilePhoto } from '../../../assets/figma.named.svg/profile-photo.svg';
import { ReactComponent as MessagesIcon } from '../../../assets/figma.named.svg/icon-messages.svg';
import { ReactComponent as EmptyBoxIllustration } from '../../../assets/figma.named.svg/frame-70.svg';
import LinkAndShareButton from '../../../components/Button/ShareButton';

const PostNoneAnswer = () => {
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

      <EmptyStateContainer>
        <EmptyStateIcon as={MessagesIcon} />
        <EmptyStateText>아직 질문이 없습니다</EmptyStateText>
      </EmptyStateContainer>

      <EmptyImage as={EmptyBoxIllustration} />

      <FloatingButton onClick={handleGoToWriteQuestion}>질문 작성하기</FloatingButton>

      {/* Example of Toast Notification */}
      <Toast>URL이 복사되었습니다</Toast>
    </Container>
  );
};

export default PostNoneAnswer;
