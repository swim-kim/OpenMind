import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`;

const Card = styled.div`
  width: 592px;
  display: flex;
  gap: 12px;
  background: #ffffff;
  border-radius: 5px;
  padding: 16px;
  align-items: flex-start;
  border: 1px solid #9747ff;
`;

const ProfilePhotoWrapper = styled.div`
  width: ${props => (props.size === 'large' ? '48px' : '32px')};
  height: ${props => (props.size === 'large' ? '48px' : '32px')};
  border-radius: 50%;
  overflow: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
`;

const FrameHeader = styled.div`
  display: flex;
  gap: 10px;
`;

const Username = styled.span`
  font-family: Actor, sans-serif;
  font-size: ${props => (props.size === 'large' ? '18px' : '14px')};
  color: #000000;
`;

const TimeAgo = styled.span`
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #818181;
  margin-top: ${props => (props.size === 'large' ? '3px' : '0')};
`;

const InputText = styled.textarea`
  width: 93%;
  max-height: 154px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  color: #818181;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 24px;
  background: #c7bbb5;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
`;

const SampleText = styled.p`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  color: ${props => (props.rejection ? '#b93333' : '#000000')};
`;

export {
  Container,
  Card,
  ProfilePhotoWrapper,
  Frame,
  FrameHeader,
  Username,
  TimeAgo,
  InputText,
  Button,
  SampleText,
};