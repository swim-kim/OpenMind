import React from 'react';
import { BadgeContainer, BadgeText } from './Badge.styles';

const Badge = ({ children }) => {
  return (
    <BadgeContainer>
      <BadgeText>{children}</BadgeText>
    </BadgeContainer>
  );
};

const SampleBadge = () => {
  return (
    <Badge>답변 완료</Badge>
  );
};

export default SampleBadge;
