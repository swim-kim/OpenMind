import React, { useCallback, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../../assets/default/logo.svg";
import BackgroundImg from "../../assets/default/background.svg";
import {
  FacebookShareButton,
  KakaoShareButton,
  LinkShareButton,
} from "../../components/Buttonshare/Buttonshare";
import QuestionList from "./components/QuestionList";
import { getSubject } from "../../api/swagger/Subject";

import QuestionModal from "../../components/QuestionModal";

const PostContainer = styled.div`
    width: 100%;
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
    @media (max-width:375px){
        max-width: 375px;
    }
`;

const Background = styled.img`
    width: 1200px;
    height: auto;
    object-fit: cover;
`;

const Logo = styled.img`
  display: flex;
  width: 170px;
  height: 67px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  top: 50px;
`;

const Profile = styled.img`
    display: flex;
    width: 136px;
    height: 136px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 136px;
`;
const UserName = styled.div`
    color: var(--Grayscale-60, #000);
    font-size: 32px;
    font-weight: 400;
    line-height: 40px; 
`;
const ShareWrapper = styled.div`
    display: inline-flex;
    align-items: flex-start;
    gap: 12px;
`;

const FloatingButtonWrapper = styled.div`
    width:100%;
    margin-top :58px;
    display:flex;
    justify-content: flex-end;
`;

const ProfileContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    gap:12px;
    justify-content: center;
    align-items: center;
    position:relative;
    bottom:80px;
`;
const BackgroundWrapper = styled.div`
    width: 100%;
    height: 234px; 
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
    
    @media (max-width: 768px) {
        height: 234px; 
    }

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
                <BackgroundWrapper>
                    <Background src={BackgroundImg} alt="Background Image" />
                </BackgroundWrapper>
                
                <Logo src={LogoImg} alt="오픈마인드 로고"/>
                <ProfileContainer>
                    <Profile src={subject.imageSource} alt="프로필 이미지" />
                    <UserName>{subject.name}</UserName>
                    <ShareWrapper>
                        <LinkShareButton />
                        <KakaoShareButton subject={subject} />
                        <FacebookShareButton subject={subject} />
                    </ShareWrapper>
                </ProfileContainer>
                
                <QuestionList subjectId={subjectId} />
                <FloatingButtonWrapper >
                            <QuestionModal
                              subjectId={subjectId}
                              imageSource={subject.imageSource}
                              name={subject.name}
                            />
                </FloatingButtonWrapper>
                
            </PostWrapper>
        </PostContainer>
    );
};

export default PostQuestionPage;
