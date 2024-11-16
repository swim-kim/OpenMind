import styled from 'styled-components';

// Styled Components
const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  background: #ffffff;
  border: 1px solid #542f1a;
  border-radius: 8px;
  width: fit-content;
`;

const BadgeText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #542f1a;
`;

export { BadgeContainer, BadgeText };
