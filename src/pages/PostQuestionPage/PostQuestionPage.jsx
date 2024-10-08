import React, { useCallback, useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../assets/default/logo.svg';
import BackgroundImg from '../../assets/default/background.svg';
import {
    FacebookShareButton,
    KakaoShareButton,
    LinkShareButton,
} from "../../components/Buttonshare/Buttonshare";
import QuestionList from './components/QuestionList';
import { getQuestions } from '../../api/swagger/Question';
import { getSubject } from '../../api/swagger/Subject';
import ButtonFloating from '../../components/Buttonfloating/Buttonfloating';


const PostContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`;

const PostWrapper = styled.div`
    max-width: 1200px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width:768px){
        max-width: 768px;
    }
`;

const Background = styled.img`
    width: 100%;
    height: auto;
    @media (max-width:768px){
        width:1200px;
        object-fit:cover;
        overflow:hidden;
    }
`;

const Logo = styled.img`
    display: flex;
    width: 170px;
    height: 67px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position:absolute;
    top:50px;
`;

const Profile = styled.img`
    display: flex;
    width: 136px;
    height: 136px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position:absolute;
    top:129px;
    border-radius: 136px;
`;
const UserName = styled.div`
    color: var(--Grayscale-60, #000);
    font-size: 32px;
    font-weight: 400;
    line-height: 40px; 
    position:relative;
    top:55px;
`;
const ShareWrapper = styled.div`
    display: inline-flex;
    align-items: flex-start;
    gap: 12px;
    position:relative;
    top:64px;
`;

const FloatingButtonWrapper = styled.div`
    width:100%;
    margin-top :58px;
    display:flex;
    justify-content: flex-end;
`;


const PostQuestionPage = () => {
    const { subjectId } = useParams();
    const [subject, setSubject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchSortedData = useCallback(async () => {
        console.log(subjectId);
        try {
            setLoading(true); 
            const response = await getSubject(subjectId);
            
            setSubject(response);
        } catch (err) {
            setError(err); 
        } finally {
            setLoading(false); 
        }
    }, [subjectId]); 

    useEffect(() => {
        fetchSortedData(); 
    }, [fetchSortedData]);

    return (
        <PostContainer>
            <PostWrapper>
                <Background src={BackgroundImg} alt="Background Image" />
                <Logo src={LogoImg} alt="오픈마인드 로고"/>
                <Profile src={subject.imageSource} alt="프로필 이미지" />
                <UserName>{subject.name}</UserName>
                <ShareWrapper>
                    <LinkShareButton />
                    <KakaoShareButton />
                    <FacebookShareButton />
                </ShareWrapper>
                <QuestionList subjectId={subjectId} />
                <FloatingButtonWrapper >
                    <ButtonFloating />
                </FloatingButtonWrapper>
                
            </PostWrapper>
        </PostContainer>
    );
};

export default PostQuestionPage;
