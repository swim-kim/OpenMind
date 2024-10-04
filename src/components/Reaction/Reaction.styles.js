import styled from 'styled-components';

// Styled components
const ReactionContainer = styled.div`
  border: 1px solid #9747ff;
  border-radius: 5px;
  padding: 10px;
  width: 201px;
  height: 94px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const ReactionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const ReactionIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

const ReactionText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.color};
`;

export {
  ReactionContainer,
  ReactionItem,
  ReactionIcon,
  ReactionText,
};
