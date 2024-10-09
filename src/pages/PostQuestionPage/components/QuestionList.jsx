import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from '../../../components/Icon';
import FeedCard from '../../../components/FeedCard';
import { getQuestions } from '../../../api/swagger/Question';
import NoQuestionImg from '../../../assets/default/question_empty_logo.png';

const QuestionListContainer = styled.div`
    width: 684px;
    height: 100%;
    display: inline-flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    border: 1px solid var(--Brown-30, #C7BBB5);
    background: var(--Brown-10, #F5F1EE);
    @media (max-width: 375px) {
        width: 295px;
    }
`;

const QuestionCountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

const StyledMessageIcon = styled(Icon.Messages)`
    color: var(--Brown-40, #542F1A);
`;

const QuestionCountText = styled.div`
    color: var(--Brown-40, #542F1A);
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
`;

const NoQuestion = styled.img`
    width: 150px;
    height: 154px;
    flex-shrink: 0;
`;

function QuestionList({ subjectId }) {
    const [questionList, setQuestionList] = useState([]); // 질문 목록
    const [response, setResponse] = useState({ count: 0, results: [] }); // 응답 데이터 초기값
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    const fetchAllQuestions = async () => {
        setIsLoading(true); // 로딩 시작
        try {
            const questions = await getQuestions(subjectId); // 모든 질문 가져오기
            setQuestionList(questions.results); // 질문 목록 설정
            setResponse(questions); // 응답 설정
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false); // 로딩 완료
        }
    };

    useEffect(() => {
        fetchAllQuestions(); // 컴포넌트 마운트 시 모든 질문 가져오기
    }, [subjectId]);

    return (
        <QuestionListContainer>
            {isLoading ? (
                <div>로딩 중...</div>
            ) : error ? (
                <div>에러 발생: {error.message}</div>
            ) : response.count === 0 ? (
                <>
                    <QuestionCountContainer>
                        <StyledMessageIcon />
                        <QuestionCountText>아직 질문이 없습니다</QuestionCountText>
                    </QuestionCountContainer>
                    <NoQuestion src={NoQuestionImg} />
                </>
            ) : (
                <>
                    <QuestionCountContainer>
                        <StyledMessageIcon />
                        <QuestionCountText>{`${response.count}개의 질문이 있습니다`}</QuestionCountText>
                    </QuestionCountContainer>
                    {questionList.map((question) => (
                        <FeedCard key={question.id} question={question} subjectId={subjectId} />
                    ))}
                </>
            )}
        </QuestionListContainer>
    );
}

export default QuestionList;
