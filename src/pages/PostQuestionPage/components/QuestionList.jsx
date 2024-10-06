import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from '../../../components/Icon';
import FeedCard from '../../../components/FeedCard';
import { getQuestions } from '../../../api/swagger/Question';

const QuestionListContainer = styled.div`
    width: 684px;
    height: 100%;
    margin-top: 106px;
    display: inline-flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    border: 1px solid var(--Brown-30, #C7BBB5);
    background: var(--Brown-10, #F5F1EE);
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

function QuestionList( { subjectId } ) {
    const [questionList, setQuestionList] = useState([]);
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchSortedData = useCallback(async () => {
        try {
            setLoading(true); 
            const questions = await getQuestions(subjectId); 
            setQuestionList(questions.results);
            setResponse(questions);
        } catch (err) {
            setError(err); 
        } finally {
            setLoading(false); 
        }
    }, []); 

    useEffect(() => {
        fetchSortedData(); 
    }, [fetchSortedData]);

  
    return (
        <QuestionListContainer>
            <QuestionCountContainer>
                <StyledMessageIcon />
                <QuestionCountText>{response.count}개의 질문이 있습니다</QuestionCountText>
            </QuestionCountContainer>
            {questionList.map((question) => (
                <FeedCard key={question.id} question={question} subjectId={subjectId}/>
            ))}

        </QuestionListContainer>
    );
}

export default QuestionList;
