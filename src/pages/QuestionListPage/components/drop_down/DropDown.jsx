import { useState } from "react";
import "../../../../styles/global.css";
import { OptionBox, OptionText, Option } from "./Options";
import styled from "styled-components";
import { ReactComponent as upArrow } from "../../../../assets/icon/Arrow-up.svg";
import { ReactComponent as downArrow } from "../../../../assets/icon/Arrow-down.svg";

const DropDownText = styled.div`
	flex: 1 0 0;
	color: var(--Grayscale-60, #000);
	font-feature-settings: "liga" off, "clig" off;fi
	font-family: Pretendard;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 18px; /* 128.571% */
`;

const DownArrowIcon = styled(downArrow)`
	width: 14px;
	height: 14px;
`;

const UpArrowIcon = styled(upArrow)`
	width: 14px;
	height: 14px;
`;

const DropDown = styled.div`
	display: flex;
	padding: 8px 12px;
	justify-content: center;
	align-items: center;
	gap: 4px;
	align-self: stretch;
	border-radius: 8px;
	border: 1px solid var(--Grayscale-60, #000);
	background: var(--Grayscale-10, #fff);
`;

const DropDownWrapper = styled.div`
	display: flex;
	width: 79px;
	flex-direction: column;
	align-items: flex-start;
	gap: 4px;
	position: relative;
`;

const CombinedDropDown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [choice, setChoice] = useState("이름순");
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	const handleChangeChoice = (e) => {
		console.log(e.target.textContent);
		setChoice(e.target.textContent);
		setIsOpen(false);
	};
	return (
		<>
			<DropDownWrapper>
				<DropDown onClick={handleToggle}>
					<DropDownText>{choice}</DropDownText>
					{isOpen ? <UpArrowIcon /> : <DownArrowIcon />}
				</DropDown>
				<OptionBox $isOpen={isOpen}>
					<Option>
						<OptionText
							value={"이름순"}
							$choice={choice}
							onClick={handleChangeChoice}
						>
							이름순
						</OptionText>
					</Option>
					<Option>
						<OptionText
							value={"최신순"}
							$choice={choice}
							onClick={handleChangeChoice}
						>
							최신순
						</OptionText>
					</Option>
				</OptionBox>
			</DropDownWrapper>
		</>
	);
};

export default CombinedDropDown;
//드롭박스 누르면 옵션 보여주는 컴포넌트
