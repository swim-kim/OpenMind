import styled from 'styled-components';

const Icon = styled.svg`
  width: 18px;
  height: 18px;
`;

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.size === 'medium' ? '8px' : '4px'};
  padding: ${props => props.size === 'medium' ? '12px 24px' : '8px 12px'};
  border-radius: 8px;
  border: ${props => props.variant === 'outline'
    ? (props.isActive ? '2px' : '1px')
    : 'none'} solid ${props => props.colors.border};
  background-color: ${props => props.variant === 'fill'
    ? props.colors.background
    : 'transparent'};
  color: ${props => props.writing.color};

  &:hover {
    cursor: pointer;
    border-width: ${props => props.variant === 'outline' ? '2px' : 'none'};
  }
  opacity: ${props => props.isActive ? 1 : 0.5};
`;

const ButtonText = styled.span`
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color:  ${props => props.textColor};
`;

export { Icon, ButtonWrapper, ButtonText };