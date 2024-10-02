import styled from "styled-components";
import { ReactComponent as editLogo } from "../../../../assets/default/editLogo.svg";
import { ReactComponent as deleteLogo } from "../../../../assets/default/deleteIcon.svg";
//카멜 버튼을 누른 상태
//수정하기 등에 관한 부모 컴포넌트
//스타일 적용을 위한 스타일 컴포넌트

const Wraper = styled.div`
	display: flex;
	width: 103px;
	padding: 4px 0px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	border: 1px solid var(--gray-20);
	background: var(--Grayscale-10, #fff);
	/* 1pt */
	box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
`;

// const PublicBox = styled.div``;

const Edit = styled.div`
	display: flex;
	padding: 6px 16px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	align-self: stretch;
	background: var(--Grayscale-10, #fff);
	color: var(--Grayscale-50, #515151);
	font-feature-settings: "liga" off, "clig" off;
	font-family: Pretendard;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 18px; /* 128.571% */
	&:hover {
		color: var(--blue-50); // 텍스트 색상 변경
		svg {
			fill: inherit; // 아이콘 색상 변경
		}
	}
`;

const Delete = styled.div`
	display: flex;
	padding: 6px 16px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	align-self: stretch;
	color: var(--Grayscale-50, #515151);
	font-feature-settings: "liga" off, "clig" off;
	font-family: Pretendard;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 18px; /* 128.571% */
	flex: 1 0 0;
	&:hover {
		color: var(--blue-50); // 텍스트 색상 변경
		svg {
			fill: inherit; // 아이콘 색상 변경
		}
	}
`;

const EditLogo = styled(editLogo)`
	width: 14px;
	height: 14px;
`;

const DeleteLogo = styled(deleteLogo)`
	width: 14px;
	height: 14px;
`;

const CombinedKebobIcon = ({ handleEdit, handleDelete }) => {
	// 프롭스가 들어가야함 함수들 받아줘야함 : key
	return (
		<>
			<Wraper>
				<publicBox>
					<Edit value={"Edit"} onClick={handleEdit}>
						<EditLogo />
						수정하기
					</Edit>
					<Delete value={"Delete"} onClick={handleDelete}>
						<DeleteLogo />
						삭제하기
					</Delete>
				</publicBox>
			</Wraper>
		</>
	);
};

export default CombinedKebobIcon;
