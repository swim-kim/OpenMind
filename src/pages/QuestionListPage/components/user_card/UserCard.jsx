// import { ReactComponent as DefaultProfile } from "../../../../assets/default/defaultProfile.svg";
import styled from "styled-components";
import { ReactComponent as MessagesSVG } from "../../../../assets/icon/Messages.svg";


const UserCardBox = styled.div`
	display: flex;
	width: 220px;
	height: 187px;
	padding: 20px;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	border-radius: 16px;
	border: 1px solid var(--Grayscale-40, #818181);
	background: var(--Grayscale-10, #fff);
	@media (max-width: 950px) {
		width: 186px;
		height: 187px;
		padding: 20px;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		flex: 1 0 0;
  }
	@media (max-width: 768px) {
		display: flex;
		width: 220px;
		height: 187px;
		padding: 20px;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}
	@media (max-width:375px) {
    display: flex;
		width: 155.5px;
		padding: 16px;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		align-self: stretch;
  }
`;

// Profile // Photo 부분 - 이미지 이클립스 wrapper 의 부모 로 존재
const ProfileImage = styled.div``;

// 이미지 이클립스, 동그랗게만드는 wrapper
const ImageWrapper = styled.div`
	// background-color: #d9d9d9;
	background-color: lightgray;
	background: url(${({ $imageUrl }) => $imageUrl}) no-repeat;
	width: 60px;
	height: 60px;
	background-size: cover; /* 배경 이미지 크기를 조정 */
	background-position: 50%;
	background-position: center; /* 이미지가 중앙에 오도록 위치 조정 */
	border-radius: 60px;
`;

// 아초는 고양이 - text에 대한 스타일
const NickName = styled.div`
	color: var(--Grayscale-60, #000);
	font-feature-settings: "liga" off, "clig" off;
	font-family: Pretendard;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 25px; /* 125% */
`;

// 프레임 51 카드 하단의 데이터를 보여주는 박스 ( 아이콘, 받은질문 , 질문개수 를 포함함)
const CardInfoBox = styled.div`
	display: flex;
	height: 22px;
	justify-content: space-between;
	align-items: center;
	flex-shrink: 0;
	align-self: stretch;
`;

// 프레임 46 , 받은질문과 아이콘을 포함하는 박스 , svg 와 text 를 포함함
const GetQuestionBox = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`;

//logo 스타일 박스
const LogoStyledBox = styled(MessagesSVG)`
	width: 18px;
	height: 18px;
	color: var(--Grayscale-40, #818181);
`;

// 받은질문과 숫자를 모두 사용가능한 text
const QuestionText = styled.div`
	color: var(--Grayscale-40, #818181);
	font-feature-settings: "liga" off, "clig" off;
	font-family: Pretendard;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px; /* 137.5% */
`;

const CombinedUserCard = ({ id, name, imageSource, questionCount }) => {
	return (
		<>
			<div>
				<UserCardBox>
					<ProfileImage>
						{/* <DefaultProfile /> */}
						<ImageWrapper $imageUrl={imageSource} />
					</ProfileImage>
					<NickName>{name}</NickName>
					<CardInfoBox>
						<GetQuestionBox>
							<LogoStyledBox />
							<QuestionText>받은 질문</QuestionText>
						</GetQuestionBox>
						<QuestionText>{questionCount}</QuestionText>
					</CardInfoBox>
				</UserCardBox>
			</div>
		</>
	);
};

export default CombinedUserCard;
