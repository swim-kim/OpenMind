import styled from 'styled-components';

// Styled components
const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background: #a1a2a3;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  width: fit-content;
`;
const ToastMessage = styled.div`
 padding: 50px;
 background-Color: #a1a2a3;
 height: 100vh;
`;

export { ToastContainer, ToastMessage };

