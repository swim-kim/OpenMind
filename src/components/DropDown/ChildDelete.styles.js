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
    background: #f9f9f9;
  }
`;

const MenuItemSelected = styled(MenuItem)`
  background: #ffffff;
  color: #1877f2;

  &:hover {
    background: #f9f9f9;
  }
`;

const MenuText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.color};
`;

const MenuIcon = styled(({ icon: Icon, ...props }) => <Icon {...props} />)`
  width: 10px;
  height: 10px;
`;

export {
  DropdownContainer,
  MenuItem,
  MenuItemSelected,
  MenuText,
  MenuIcon,
};