import styled, { css } from 'styled-components';

// Dynamic Styles for PaginationItem based on props
const getItemStyles = (state, size) => {
  let color = '#818181'; // Default color
  let hoverColor = '#000000';
  let selectedColor = '#542f1a';

  if (state === 'Hover') {
    color = hoverColor;
  } else if (state === 'Selected') {
    color = selectedColor;
  }

  if (size === 'PC') {
    return css`
      width: 40px;
      height: 40px;
      font-size: 20px;
      justify-content: center;
      align-items: center;
      color: ${color};
      line-height: 25px;
    `;
  } else {
    return css`
      width: 30px;
      height: 30px;
      font-size: 16px;
      justify-content: center;
      align-items: center;
      color: ${color};
      line-height: 25px;
    `;
  }
};

// Styled Components
const PaginationItem = styled.div`
  display: flex;
  ${(props) => getItemStyles(props.state, props.size)}
  font-family: 'Actor', sans-serif;
`;

const PaginationContainer = styled.div`
  width: 227px;
  height: 148px;
  border: 1px solid #9747ff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export {
  PaginationItem,
  PaginationContainer,
};
