import React from 'react';

import { ReactComponent as ThumbsDownIcon } from '../../assets/figma.named.svg/icon-thumbs-down.svg';
import { ReactComponent as ThumbsUpIcon } from '../../assets/figma.named.svg/icon-thumbs-up.svg';
import { ReactComponent as ThumbsDown2Icon } from '../../assets/figma.named.svg/icon-thumbs-down-2.svg';
import { ReactComponent as ThumbsUp2Icon } from '../../assets/figma.named.svg/icon-thumbs-up-2.svg';

import { ReactionContainer, ReactionItem, ReactionIcon, ReactionText } from './Reaction.styles';

// React component
const Reaction = () => {
  return (
    <ReactionContainer>
      <ReactionItem>
        <ReactionIcon as={ThumbsDownIcon} />
        <ReactionText color="#818181ff">싫어요</ReactionText>
      </ReactionItem>

      <ReactionItem>
        <ReactionIcon as={ThumbsUpIcon} />
        <ReactionText color="#818181ff">좋아요</ReactionText>
      </ReactionItem>

      <ReactionItem>
        <ReactionIcon as={ThumbsDown2Icon} />
        <ReactionText color="#000000ff">싫어요</ReactionText>
      </ReactionItem>

      <ReactionItem>
        <ReactionIcon as={ThumbsUp2Icon} />
        <ReactionText color="#1877f2ff">좋아요 12</ReactionText>
      </ReactionItem>
    </ReactionContainer>
  );
};

export default Reaction;