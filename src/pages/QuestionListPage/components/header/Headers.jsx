import { ReactComponent as DefaultLogo } from "../../../../assets/default/defaultLogo.svg";
import style from "styled-components";
import CustomButton from "../../../../components/CustomButton";
import LocalStore from "../../../../api/storage/LocalStore";
import { useNavigate } from "react-router-dom";

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
	const navigate = useNavigate();
	const handleTo = () => {
		const subject = LocalStore.getItem("subject");
		const subjectId = subject.id;
		const idGet = LocalStore.getItem(`subject_${subjectId}_questions`);

		if (!idGet) {
			handleToHome();
			return;
		}
		navigate(`/post/${subjectId}/answer`);
	};
	const handleToHome = () => {
		navigate("/");
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
