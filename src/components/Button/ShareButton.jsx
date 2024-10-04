import React from 'react';
import { Container, IconButton, StyledIcon } from './ShareButton.styles';

import { ReactComponent as LinkIcon } from '../../assets/figma.named.svg/icon-link-2.svg';
import { ReactComponent as KakaoIcon } from '../../assets/figma.named.svg/icon-kakaotalk-2.svg';
import { ReactComponent as FacebookIcon } from '../../assets/figma.named.svg/icon-facebook-2.svg';

const LinkAndShareButton = () => {
  return (
    <Container>
      <IconButton backgroundcolor="#542f1a">
        <StyledIcon as={LinkIcon} />
      </IconButton>
      <IconButton backgroundcolor="#fee500">
        <StyledIcon as={KakaoIcon} />
      </IconButton>
      <IconButton backgroundcolor="#1877f2">
        <StyledIcon as={FacebookIcon} />
      </IconButton>
    </Container>
  );
};

export default LinkAndShareButton;
