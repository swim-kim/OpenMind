import styled from 'styled-components';

// Styled components

const DropdownContainer = styled.div`
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  width: 130px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  gap: 8px;
  background: #ffffff;
  cursor: pointer;

  &:hover {
    background: #e6e6e6;
  }
`;

const MenuText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #515151;
  margin-left: 8px;
`;

const MenuIcon = styled.svg`
  width: 14px;
  height: 14px;
`;

export {
  DropdownContainer,
  MenuItem,
  MenuText,
  MenuIcon,
};
