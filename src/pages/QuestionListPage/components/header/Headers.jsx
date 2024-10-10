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

// 로컬 스토리지에서 가져온다 값을
// id부분은 `${id}`이런식으로 리터럴 문법을 쓴다.
// /post/{id}/answer
const ContainHeader = () => {
	const handleTo = () => {
		const subjectKey = "subject_${id}_questions";
		const subject = LocalStore.getItem(subjectKey);

		console.log(subject);

		// subject가 null 또는 undefined인 경우 홈으로 이동
		if (!subject) {
			handleToHome();
		}

		let parsedSubject;
		try {
			parsedSubject = JSON.parse(subject); // JSON 파싱 시도
		} catch (error) {
			console.error("JSON 파싱 오류:", error);
			handleToHome(); // 파싱 오류가 발생하면 홈으로 이동
			return; // 함수 종료
		} finally {
			window.location.href = `/post/${parsedSubject.id}/answer`;
		}
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
