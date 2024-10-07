import styled from "styled-components";
import UserCard from "./UserCard";
import { useParams } from "react-router-dom";

const ArrayCardLine = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 20px;
`;

const ArrayContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
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
				{/* TODO: 페이지 네이션 다 만들면 수정해야 할 것 */}
				<ArrayCardLine>
					{console.log("sss", cardList.slice(0, 4))}
					{cardList.slice(0, 4).map((el) => {
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
				<ArrayCardLine>
					{console.log("ttt", cardList.slice(4, 8))}
					{cardList.slice(4, 8).map((el) => {
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
