import styled from "styled-components";

export const OptionText = styled.div`
	flex: 1 0 0;
	color: ${({$choice,value})=>{
		return ($choice === value ? (
				"var(--Blue-50, #1877F2)"
			) : (
				"var(--Grayscale-50, #515151)"
			))
	}};
	font-feature-settings: "liga" off, "clig" off;
	font-family: Pretendard;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 18px; /* 128.571% */
`;

export const Option = styled.div`
	display: flex;
	padding: 6px 16px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	align-self: stretch;
	background: var(--Grayscale-10, #fff);
`;

export const OptionBox = styled.div`
	display: ${({ $isOpen }) => {return ($isOpen ? "flex" : "none")}};
	width: 79px;
	padding: 4px 0px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 42px;
	border-radius: 8px;
	border: 1px solid var(--Grayscale-30, #cfcfcf);
	background: var(--Grayscale-10, #fff);

	/* 1pt */
	box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
`;
//드롭박스 옵션 스타일 컴포넌트