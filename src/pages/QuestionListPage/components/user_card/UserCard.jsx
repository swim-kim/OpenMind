import { ReactComponent as DefaultProfile } from "../../../../assets/default/defaultProfile.svg";
import styled from "styled-components";

const mockData = {
	id: 8367,
	name: "string",
	imageSource:
		"https://fastly.picsum.photos/id/772/200/200.jpg?hmac=9euSj4JHTPr7uT5QWVmeNJ8JaqAXY8XmJnYfr_DfBJc",
	questionCount: 0,
	createdAt: "2024-10-02T02:38:50.479169Z",
};

const UserCardBox = styled.div`
	// width: 60px;
	// height: 60px;
	// flex-shrink: 0;
`;




// Profile // Photo 부분 - 이미지 이클립스 wrapper 의 부모 로 존재
const ProfileImage = styled.div`
	

`;

// 이미지 이클립스, 동그랗게만드는 wrapper
const ImageWrapper = styled.div`
	background: url(${({ $imageUrl }) => $imageUrl}) lightgray 50% / cover no-repeat, #D9D9D9;
	width: 60px;
  height: 60px;
  background-size: cover; /* 배경 이미지 크기를 조정 */
  background-position: center; /* 이미지가 중앙에 오도록 위치 조정 */
	border-radius: 60px
`


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

`

// 프레임 46 , 받은질문과 아이콘을 포함하는 박스 , svg 와 text 를 포함함
const GetQuestionBox = styled.div`
`
//질문 개수를 나타내는 박스
const QuestionCount = styled.div`
`

// 받은질문과 숫자를 모두 사용가능한 text
const QuestionText = styled.div`
	color: var(--Grayscale-40, #818181);
	font-feature-settings: 'liga' off, 'clig' off;
	font-family: Pretendard;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px; /* 137.5% */
`







const CombinedUserCard = () => {
	return (
		<>
			<div>
				<UserCardBox>
					<ProfileImage>
						{/* <DefaultProfile /> */}
						<ImageWrapper $imageUrl={mockData.imageSource} />
					</ProfileImage>
					<NickName>{mockData.name}</NickName>
					<CardInfoBox>
						<GetQuestionBox>
							{/* logo 들어갈 자리 */}
							<QuestionText>받은 질문</QuestionText>
						</GetQuestionBox>
						<QuestionText>{mockData.questionCount}</QuestionText>
					</CardInfoBox>
				</UserCardBox>
			</div>
		</>
	);
};

export default CombinedUserCard;
