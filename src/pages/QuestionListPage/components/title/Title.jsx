import style from "styled-components";


const TitleText = style.div`
  color: var(--Grayscale-60, #000);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 390px) {
  color: var(--Grayscale-60, #000);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Actor;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; /* 125% */
  white-space: nowrap;
  width: 214px;
  }
`;


const Title = ()=>{
  return(
    <TitleText>
      누구에게 질문할까요?
    </TitleText>
  )
};

export default Title;