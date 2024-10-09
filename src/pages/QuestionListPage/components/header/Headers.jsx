import {ReactComponent as DefaultLogo} from "../../../../assets/default/defaultLogo.svg";
import style from "styled-components";
import CustomButton from "../../../../components/CustomButton";


const StyleBox = style.div`
  display: flex;
  justify-content: space-between;
	gap: 633px;
  margin-bottom: 40px;
  @media (max-width: 950px) {
		gap: 543px;
	};
	@media (max-width: 768px) {
		gap: 361px;
	};
	@media (max-width: 390px) {
    display: flex;
		flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
	};
`;


const ContainHeader = ()=>{
  const handleTo = ()=>{}
  return(
    <>
      <StyleBox>
        <DefaultLogo/>
        <CustomButton mode="goToReply" onClick={handleTo}/>
      </StyleBox>
    </>
  )
}

export default ContainHeader;