import React from 'react';
import {
  Container,
  SectionTitle,
  ColorBox,
  Label,
  TypoSection,
  TypoLabel,
  ShadowBox,
} from './Foundation.styles';

import { ReactComponent as Rectangle30 } from '../../assets/figma.named.svg/rectangle-30.svg';
import { ReactComponent as Rectangle302 } from '../../assets/figma.named.svg/rectangle-30-2.svg';
import { ReactComponent as Rectangle303 } from '../../assets/figma.named.svg/rectangle-30-3.svg';
import { ReactComponent as Rectangle304 } from '../../assets/figma.named.svg/rectangle-30-4.svg';
import { ReactComponent as Rectangle305 } from '../../assets/figma.named.svg/rectangle-30-5.svg';
import { ReactComponent as Rectangle306 } from '../../assets/figma.named.svg/rectangle-30-6.svg';

const ColorPalette = () => (
  <div>
    <SectionTitle>Grayscale</SectionTitle>
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <ColorBox><Rectangle30 /></ColorBox>
        <Label color="#000">10</Label>
      </div>
      <div>
        <ColorBox><Rectangle302 /></ColorBox>
        <Label color="#000">20</Label>
      </div>
      <div>
        <ColorBox><Rectangle303 /></ColorBox>
        <Label color="#000">30</Label>
      </div>
      <div>
        <ColorBox><Rectangle304 /></ColorBox>
        <Label color="#000">40</Label>
      </div>
      <div>
        <ColorBox><Rectangle305 /></ColorBox>
        <Label color="#000">50</Label>
      </div>
      <div>
        <ColorBox><Rectangle306 /></ColorBox>
        <Label color="#000">60</Label>
      </div>
    </div>
  </div>
);

const ShadowPalette = () => (
  <div>
    <SectionTitle>Shadow</SectionTitle>
    <div style={{ display: 'flex', gap: '20px' }}>
      <ShadowBox shadow="1pt solid #000" />
      <Label color="#000">1pt</Label>
      <ShadowBox shadow="2pt solid #000" />
      <Label color="#000">2pt</Label>
      <ShadowBox shadow="3pt solid #000" />
      <Label color="#000">3pt</Label>
    </div>
  </div>
);

const FontPalette = () => {
  const generateTypo = (name, style, typoText) => (
    <TypoLabel
      fontFamily={style.font}
      fontWeight={style.weight}
      fontSize={style.size}
      lineHeight={style.lineHeight}
      color="#000"
    >
      {name}
      <span style={{ marginLeft: 35 }}>{typoText}</span>
    </TypoLabel>
  );

  return (
    <div>
      <SectionTitle>Typography</SectionTitle>
      <TypoSection>
        {generateTypo("H1", { "font": "Pretendard", "weight": 400, "size": 40, "lineHeight": 47.73 }, "가나다라마바사")}
        {generateTypo("H2", { "font": "Pretendard", "weight": 400, "size": 32, "lineHeight": 40 }, "가나다라마바사")}
        {generateTypo("H3", { "font": "Pretendard", "weight": 400, "size": 24, "lineHeight": 30 }, "가나다라마바사")}
        {generateTypo("Body1 / Regular", { "font": "Pretendard", "weight": 400, "size": 20, "lineHeight": 25 }, "가나다라마바사")}
        {generateTypo("Body1 / Bold", { "font": "Pretendard", "weight": 400, "size": 20, "lineHeight": 25 }, "가나다라마바사")}
        {generateTypo("Body2 / Regular", { "font": "Pretendard", "weight": 400, "size": 18, "lineHeight": 24 }, "가나다라마바사")}
        {generateTypo("Body2 / Bold", { "font": "Actor", "weight": 400, "size": 18, "lineHeight": 24 }, "가나다라마바사")}
        {generateTypo("Body3 / Regular", { "font": "Pretendard", "weight": 400, "size": 16, "lineHeight": 22 }, "가나다라마바사")}
        {generateTypo("Body3 / Bold", { "font": "Pretendard", "weight": 400, "size": 16, "lineHeight": 22 }, "가나다라마바사")}
        {generateTypo("Caption 1 / Regular", { "font": "Pretendard", "weight": 400, "size": 14, "lineHeight": 18 }, "가나다라마바사")}
        {generateTypo("Caption 1 / Medium", { "font": "Pretendard", "weight": 500, "size": 14, "lineHeight": 18 }, "가나다라마바사")}
        {generateTypo("Caption 1 / Bold", { "font": "Pretendard", "weight": 400, "size": 14, "lineHeight": 18 }, "가나다라마바사")}
      </TypoSection>
    </div>
  );
}

const Foundation = () => {
  return (
    <Container>
      <ColorPalette />
      <br />
      <ShadowPalette />
      <br />
      <FontPalette />
    </Container>
  );
};

export default Foundation;