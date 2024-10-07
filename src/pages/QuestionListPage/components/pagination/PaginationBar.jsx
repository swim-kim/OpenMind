import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../../../../assets/icon/Arrow-left.svg";
import { ReactComponent as RightArrow } from "../../../../assets/icon/arrow-right.svg";



const PaginationButton = styled.button`
  color: ${({ isActive })=> (isActive ? 'var(--Brown-40, #542F1A)' : 'var(--Grayscale-40, #818181)')};
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Actor;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */;
  background: none; /* 기본 배경 제거 */
  border: none; /* 기본 테두리 제거 */
  padding: 5px 10px; /* 패딩 추가 */
  margin: 0 5px; /* 버튼 간격 추가 */
  &.active {
    /* 활성화된 버튼에 대한 추가 스타일 */
    font-weight: bold; /* 예: 글씨를 볼드체로 */
  &:disabled {
    cursor: not-allowed;
  }
`;

const PaginationBar = ({ totalPageNum, activePageNum, onPageChange }) => {
	const maxVisiblePages = 5;
	let startPage;
	console.log("totalPageNum", totalPageNum);
	//총 페이지 갯수가 화면상 페이지 갯수보다 작을 때 ex)4 <= 5
	if (totalPageNum <= maxVisiblePages) {
		startPage = 1;
	} else {
		// 6~10이 들어왔을때, 2라는 값이 startPage에 저장되도록 하는 로직을 짜야함 , 11~20은 3 이런식으로
		startPage = 5 + maxVisiblePages;
		startPage =
			(Math.ceil(activePageNum / maxVisiblePages) - 1) * maxVisiblePages + 1;
		console.log("startPage", startPage);
	}

	// useState 써서 페이지네이션에서 사용할 상태들 모두 관리
	// useEffect 내부에서 쓸 handler 함수 구현
	// useEffect에서 handler함수 호출
	// state에 따른 map을 돌려서 ArrayCard부분에 데이터 전달

	// [1,2,3,4,5] , [6,7,8,9,10]
	const pages = Array.from(
		{ length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
		(_, i) => startPage + i
	);
	console.log("pages", pages);

	return (
		<div>
			<PaginationButton
				className="paginationButton"
        isActive={activePageNum > 1}
				disabled={activePageNum === 1}
				onClick={() => onPageChange(activePageNum - 1)}
			>
				&lt;
			</PaginationButton>
			{pages.map((page) => (
				<PaginationButton
					key={page}
					className={`paginationButton ${
						activePageNum === page ? "active" : ""
					}`}
          isActive={activePageNum === page}
					onClick={() => onPageChange(page)}
				>
					{page}
				</PaginationButton>
			))}
			<PaginationButton
				className="paginationButton"
        isActive={activePageNum < totalPageNum}
				disabled={activePageNum === totalPageNum}
				onClick={() => onPageChange(activePageNum + 1)}
			>
				&gt;
			</PaginationButton>
		</div>
	);
};

export default PaginationBar;
