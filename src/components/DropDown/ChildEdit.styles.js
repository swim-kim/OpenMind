import styled from 'styled-components';

// Styled components

const DropdownContainer = styled.div`
  border: 1px solid #9747ff;
  border-radius: 5px;
  padding: 10px;
  width: 143px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  gap: 8px;
  background: ${(props) => props.background};
  cursor: pointer;

  &:hover {
    background: #f9f9f9 ff;
  }
`;

const MenuText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.color};
`;

const MenuIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export {
  DropdownContainer,
  MenuItem,
  MenuText,
  MenuIcon,
};