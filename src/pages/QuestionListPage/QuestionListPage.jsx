import DropDown from "./components/drop_down/DropDown";
import PaginationBar from "./components/pagination/PaginationBar";
import ArrayCard from "./components/user_card/ArrayCard";
import { useState, useEffect } from "react";
import { getItems } from "../../IsThereAPI";
import Title from "./components/title/Title";
import style from "styled-components"
import ContainHeader from "./components/header/Headers";



const Wrapper = style.div`
	display: flex;
	flex-direction: column; /* 세로 방향으로 정렬 */
	align-items: center; /* 수평 가운데 정렬 */
	justify-content: center; /* 수직 가운데 정렬 (높이가 필요한 경우) */
	width: 100%; /* 전체 너비 사용 */
	margin-top: 20px; /* 여백 추가 (필요에 따라 조정) */

	@media (max-width: 390px) {
		margin-right: 24px;
		margin-left: 24px;
		width: auto;
	}
`;


const TitleWrapper = style.div`
	display: flex;
	flex-direction: column; /* 세로 방향으로 정렬 */
	align-items: center; /* 수평 가운데 정렬 */
	justify-content: center; /* 수직 가운데 정렬 (높이가 필요한 경우) */
	width: 100%; /* 전체 너비 사용 */
	padding: 20px; /* 여백 추가 (필요에 따라 조정) */

	@media (max-width: 390px) {
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap:42px;
		margin-bottom: 16px;
		padding: 0;
	};
`;

const DropDownWrapper = style.div`
	margin-bottom: 20px;
	margin-top: 12px;
	@media(max-width: 390px){
		margin-bottom: 0;
		margin-top: 0;
	}
`;


const CardPGWrapper = style.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 40px;
	@media (max-width: 950px) {
		gap: 46px;
	};
	@media (max-width: 768px) {
		gap: 61px;
	};
	@media (max-width: 390px) {
		gap: 31px;
	};
`;


//부모 컴포넌트
function QuestionListPage() {
	const [limit, setLimit] = useState(8); // 페이지당 보여줄 아이템 개수
	const [cardList, setCardList] = useState([]);
	const [page, setPage] = useState(1); // 현재 활성화된 페이지
	const [totalPageNum, setTotalPageNum] = useState(); // 전체 아이템수 / 페이지당 보여줄수

	const fetchApi = async () => {
		// 파라미터로 현재 원하느 페이지 정보와, 페이지당 개수 (limit)  전달해서 api호출시 query로 반영 해줘야하는 코드가 필요함
		console.log("limit,page", limit, page);
		const data = await getItems(limit, page); // 8,8 limit, offset
		setCardList(data.results);
		console.log("data.count", data.count);
		setTotalPageNum(Math.ceil(data.count / limit));
		return data.results;
	};

	useEffect(() => {
		fetchApi(); // 처음 api보낼때 1페이지기준으로 8개 받아오도록 되어있음. 2페이지 기준으로 줘
	}, [page, limit]);

	const onPageChange = (pageNumber) => {
		setPage(pageNumber);
	};

	const handleResize = () => {
		if (window.innerWidth < 769) {
			setLimit(6); // 화면 크기가 768px 이하일 때 limit을 6으로 설정
		} else {
			setLimit(8); // 그렇지 않으면 기본값인 8로 설정
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<Wrapper>
			<ContainHeader />
			<TitleWrapper>
				<Title />
				<DropDownWrapper>
					<DropDown />
				</DropDownWrapper>
			</TitleWrapper>
			<CardPGWrapper>
				<ArrayCard cardList={cardList} />
				<PaginationBar
					totalPageNum={totalPageNum}
					activePageNum={page}
					onPageChange={onPageChange}
				/>
			</CardPGWrapper>
		</Wrapper>
	);
}

export default QuestionListPage;
