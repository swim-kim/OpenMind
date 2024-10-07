import styled from "styled-components";
import UserCard from "./UserCard";
import { useParams } from "react-router-dom";

const ArrayCardLine = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 20px;
  @media (max-width:768px) {
    width: 700px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }
  @media (max-width:375px) {
    width: 327px;
    display: inline-flex;
    align-items: flex-start;
    gap: 16px;
  }
`;

const ArrayContainer = styled.div`
	display: flex;
	width: 940px;
	height: auto;
  @media (max-width:768px) {
    width: 700px;
  }

`;



// 유즈 스테이스 쓰고, mockArray 초기값주고, 유즈이펙트+api 부분은 나중에 구현하고
// 유즈이펙트 쓰고 해서 api 결과 받으면 8개 들어있는 배열 받을것임
// useState에 업데이트해서 하위 컴포넌트들 리렌더링 시키면서 카드 보여줄것

//useEffect로 api의 값을 useState의 세터로 가져온다.
const ArrayCard = ({ cardList }) => {
	const { id } = useParams();
	console.log("URL 파라미터 id:", id);
	return (
		<>
			<ArrayContainer>
				<ArrayCardLine>
					{console.log("sss", cardList.slice(0, 4))}
					{cardList.map((el) => {
						return (
							<UserCard
								key={el.id}
								id={el.id}
								name={el.name}
								imageSource={el.imageSource}
								questionCount={el.questionCount}
								param={id}
							></UserCard>
						);
					})}
				</ArrayCardLine>
			</ArrayContainer>
		</>
	);
};

export default ArrayCard;
