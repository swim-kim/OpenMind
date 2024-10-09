import React from "react";
import styled from "styled-components";
import FeedCardQuestion from "./FeedCardQuestion";
import DefaultImg from "../assets/default/defaultProfile.svg";
import { ThumbsDown, ThumbsUp } from "./Reaction/Reaction";
import Badge from "./Badge/Badge";

const FeedCardContainer = styled.div`
	width: 620px;
	padding: 32px;
	border-radius: 16px;
	background: var(--Grayscale-10, #fff);
	box-shadow: var(--box-shadow-1px);
`;

const FeedCardBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

const FeedCardButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const FeedCardAnswerContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 12px;
`;

const FeedCardUserProfile = styled.img`
	width: 48px;
	height: 48px;
	flex-shrink: 0;
	border-radius: 48px;
`;

const FeedCardAnswerBox = styled.div`
	width: 100%;
	display: flex;
	gap: 4px;
	flex-direction: column;
`;
const FeedCardAnswerHead = styled.div`
	width: 100%;
	display: flex;
	gap: 8px;
	display: flex;
`;
const FeedCardAnswerWriter = styled.div`
	color: var(--Grayscale-60, #000);
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;

	@media (max-width: 767px) {
		font-size: 16px;
	}
`;

const FeedCardAnswerTime = styled.div`
	color: var(--Grayscale-40, #818181);
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	display: flex;
	align-items: flex-end;
`;
const FeedCardAnswerText = styled.div`
	width: 100%;
	color: var(--Grayscale-60, #000);
	font-size: 16px;
	font-weight: 400;
	line-height: 22px;
`;
const FeedCardLine = styled.hr`
	height: 1px;
	align-self: stretch;
	background: var(--Grayscale-30, #cfcfcf);
`;

const FeedCardReactionContainer = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 32px;
`;

const RejectAnswer = styled.div`
	color: var(--Red-50, #b93333);
	font-size: 16px;
	font-weight: 400;
	line-height: 22px;
`;

const elapsedTime = (date) => {
	const start = new Date(date);
	const end = new Date();

	const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
	if (seconds < 60) return "방금 전";

	const minutes = seconds / 60;
	if (minutes < 60) return `${Math.floor(minutes)}분 전`;

	const hours = minutes / 60;
	if (hours < 24) return `${Math.floor(hours)}시간 전`;

	const days = hours / 24;
	return `${Math.floor(days)}일 전`;
};

const FeedCard = ({ question, subjectId }) => {
	const answer = question.answer;
	return (
		<FeedCardContainer>
			<FeedCardBox>
				<FeedCardButtonWrapper>
					<Badge status={answer ? "answered" : "unanswered"} />
				</FeedCardButtonWrapper>
				<FeedCardQuestion question={question} />
				{answer ? (
					<FeedCardAnswerContainer>
						<FeedCardUserProfile src={DefaultImg} />
						<FeedCardAnswerBox>
							<FeedCardAnswerHead>
								<FeedCardAnswerWriter>{subjectId}</FeedCardAnswerWriter>
								<FeedCardAnswerTime>
									{elapsedTime(answer.createdAt)}
								</FeedCardAnswerTime>
							</FeedCardAnswerHead>
							{answer.isRejected ? (
								<RejectAnswer>답변 거절</RejectAnswer>
							) : (
								<FeedCardAnswerText>{answer.content}</FeedCardAnswerText>
							)}
						</FeedCardAnswerBox>
					</FeedCardAnswerContainer>
				) : (
					<></>
				)}
				<FeedCardLine />
				<FeedCardReactionContainer>
					<ThumbsUp question={question} />
					<ThumbsDown question={question} />
				</FeedCardReactionContainer>
			</FeedCardBox>
		</FeedCardContainer>
	);
};

export default FeedCard;
