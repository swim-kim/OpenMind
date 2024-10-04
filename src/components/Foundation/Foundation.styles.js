import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  background: #fff;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 40px;
  color: #000000;
`;

const ColorBox = styled.div`
  width: 162px;
  height: 162px;
  background-image: url(${(props) => props.bgImage});
  margin: 10px 0;
`;

const Label = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 40px;
  color: ${(props) => props.color};
  margin-top: 10px;
`;

const TypoSection = styled.div`
  margin-top: 30px;
`;

const TypoLabel = styled.div`
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight}px;
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin || '10px 0')};
  display: flex;
  align-items: center;
`;

const ShadowBox = styled.div`
  width: 162px;
  height: 162px;
  box-shadow: ${(props) => `${props.shadow}`};
  background: #fff;
  margin: 10px 0;
`;

export {
  Container,
  SectionTitle,
  ColorBox,
  Label,
  TypoSection,
  TypoLabel,
  ShadowBox,
};