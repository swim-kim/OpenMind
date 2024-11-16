import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as LeftArrow } from '../../assets/figma.named.svg/icon-arrow-right.svg';
import { ReactComponent as RightArrow1 } from '../../assets/figma.named.svg/icon-arrow-right-2.svg';
import { ReactComponent as RightArrow2 } from '../../assets/figma.named.svg/icon-arrow-right-3.svg';
import { Icon, ButtonWrapper, ButtonText } from './BoxButton.styles';

const Button = ({
  variant,
  state,
  size,
  text,
  textColor,
  leftIcon,
  rightIcon,
  activeState,
  onClick,
}) => {
  const colors = {
    border: state === 'inactivate' ? '#c7bbb5ff' : (variant === 'outline' ? '#542f1aff' : (state === 'pressed' ? '#e4d5c9ff' : '#542f1aff')),
    background: variant === 'fill' ? (state === 'hover' ? '#542f1aff' : (state === 'pressed' ? '#341909ff' : (state === 'inactivate' ? '#c7bbb5ff' : '#f5f1eeff'))) : 'transparent'
  };

  const writing = {
    color: (variant === 'fill' && state !== 'inactivate') ? '#ffffff' : '#542f1aff'
  }

  const fontRef = size === 'medium' ? { family: 'Pretendard', weight: 400, size: '16px', lineHeight: '22px' } : { family: 'Actor', weight: 400, size: '14px', lineHeight: '18px' };

  return (
    <ButtonWrapper
      variant={variant}
      state={state}
      size={size}
      colors={colors}
      writing={writing}
      onClick={onClick}
      isActive={activeState === 'default' || activeState === 'hover'}
    >
      <Icon as={leftIcon} />
      <ButtonText font={fontRef}>{text}</ButtonText>
      <Icon as={rightIcon} />
    </ButtonWrapper>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['fill', 'outline']).isRequired,
  state: PropTypes.oneOf(['default', 'hover', 'pressed', 'inactivate']).isRequired,
  size: PropTypes.oneOf(['small', 'medium']).isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  leftIcon: PropTypes.elementType.isRequired,
  rightIcon: PropTypes.elementType.isRequired,
  activeState: PropTypes.oneOf(['default', 'inactivate']).isRequired,
  onClick: PropTypes.func,
};

const BoxButton = () => {
  return (
    <div>
      <Button
        variant="outline"
        state="default"
        size="small"
        text="질문 받기"
        textColor="#a1a2a3"
        leftIcon={LeftArrow}
        rightIcon={RightArrow1}
        activeState="default"
        onClick={() => alert('Button Clicked!')}
      />
      <Button
        variant="fill"
        state="hover"
        size="medium"
        text="답변하러 가기"
        textColor="#ffffff"
        leftIcon={LeftArrow}
        rightIcon={RightArrow2}
        activeState="default"
        onClick={() => alert('Button Clicked!')}
      />
    </div>
  );
};

export default BoxButton;
