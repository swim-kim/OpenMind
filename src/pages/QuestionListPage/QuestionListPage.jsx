import DropDown from "./components/drop_down/DropDown";
import PaginationBar from "./components/pagination/PaginationBar";
import ArrayCard from "./components/user_card/ArrayCard";
import { useState, useEffect } from "react";
import { getItems } from "../../IsThereAPI";

//부모 컴포넌트
function QuestionListPage() {
	const [limit, setLimit] = useState(8); // 페이지당 보여줄 아이템 개수
	const [cardList, setCardList] = useState([]);
	const [page, setPage] = useState(1); // 현재 활성화된 페이지
	const [totalPageNum, setTotalPageNum] = useState(); // 전체 아이템수 / 페이지당 보여줄수

	const fetchApi = async () => {
		// 파라미터로 현재 원하느 페이지 정보와, 페이지당 개수 (limit)  전달해서 api호출시 query로 반영 해줘야하는 코드가 필요함
		console.log("limit,page", limit, page);
		const data = await getItems(limit, page); // 8,1 limit, offset
		setCardList(data.results);
		console.log("data.count", data.count);
		setTotalPageNum(Math.ceil(data.count / limit));
		return data.results;
	};

	useEffect(() => {
		fetchApi(); // 처음 api보낼때 1페이지기준으로 8개 받아오도록 되어있습니다. 2페이지 기준으로 줘
		// console.log(fetchData);
	}, [page]);

	const onPageChange = (pageNumber) => {
		setPage(pageNumber);
	};

	return (
		<>
			<DropDown />
			<ArrayCard cardList={cardList} />
			<PaginationBar
				totalPageNum={totalPageNum} // 전체 페이지 개수
				activePageNum={page} // 현재 활성화된 페이지
				onPageChange={onPageChange}
			/>
		</>
	);
}

export default QuestionListPage;
