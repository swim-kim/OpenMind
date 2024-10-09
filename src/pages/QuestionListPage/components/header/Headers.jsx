import { ReactComponent as DefaultLogo } from "../../../../assets/default/defaultLogo.svg";
import style from "styled-components";
import CustomButton from "../../../../components/CustomButton";
import LocalStore from "../../../../api/storage/LocalStore";

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

const ContainHeader = () => {
	const handleTo = () => {
		const subject = LocalStore.getItem("subject");
		const parsedSubject = JSON.parse(subject);
		// JSON은 객체처럼 생겼는데, 그냥 데이터 쪼가리
		// LocalStorage는 key,value만 구성할수있고, value에는 숫자나, 문자열만 들어갈수있어요.
		// JSON.stringify 함수를 통해서 문자열처럼 다루겠다. 하는 식으로 타입변환을 했다.


		window.location.href = `/post/${parsedSubject.id}/answer`;
		// 로컬 스토리지에서 가져온다 값을
		// id부분은 `${id}`이런식으로 리터럴 문법을 쓴다.
		// www.naver.com/main
		// /post/{id}/answer
	};
	const handleToHome = () => {
		window.location.href = "/";
	};
	return (
		<>
			<StyleBox>
				<DefaultLogo onClick={handleToHome} />
				<CustomButton mode="goToReply" onClick={handleTo} />
			</StyleBox>
		</>
	);
};

export default ContainHeader;
