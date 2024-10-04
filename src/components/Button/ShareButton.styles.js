import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 184px;
  height: 80px;
  border-radius: 5px;
  border: 0px dashed #9747ff;
  background-color: ${props => props.backgroundcolor};
  box-sizing: border-box;
`;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 100px;
  border: none;
  background-color: ${props => props.backgroundcolor};
  margin: 0 8px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

export { Container, IconButton, StyledIcon };