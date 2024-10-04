import styled from 'styled-components';

// Styled components

const DropdownContainer = styled.div`
  /* border: 1px solid #9747ff;
  border-radius: 5px;
  width: 212px;
  height: 146px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box; */
`;

const DropdownBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.open ? '#000000' : '#818181')};
  cursor: pointer;
`;

const DropdownText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => (props.open ? '#000000' : '#818181')};
  margin-right: auto;
`;

const ArrowIcon = styled.svg`
  width: 14px;
  height: 14px;
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  margin-top: 4px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => (props.selected ? '#1877f2' : '#515151')};
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
`;

export {
  DropdownContainer,
  DropdownBox,
  DropdownText,
  ArrowIcon,
  DropdownMenu,
  MenuItem,
};