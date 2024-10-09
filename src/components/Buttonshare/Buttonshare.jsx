import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as KakaoSVG } from "../../assets/buttonshare/Type=Kakao.svg";
import { ReactComponent as FacebookSVG } from "../../assets/buttonshare/Type=Facebook.svg";
import { ReactComponent as LinkSVG } from "../../assets/buttonshare/Type=Link.svg";
import Thumbnail from '../../assets/default/drawing.png';
import { Helmet } from 'react-helmet'; 
import "./Button.css";
import "./Toast.css";

export const KakaoShareButton = ({ subject }) => {
  const location = useLocation();
  const baseUrl = "https://openmind-10-1.netlify.app" 
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("4efde28e8b63fd9c48dfdf697ecbf6d6");
    }
  }, []);

  const handleKakaoShare = () => {
    console.log(subject);
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: '오픈마인드',
        description: `${subject.name}님의 오픈마인드입니다.`,
        imageUrl:subject.imageSource,
        link: {
          mobileWebUrl: `${baseUrl}${location.pathname}`,
          webUrl: `${baseUrl}${location.pathname}`,
        },
      },
    });
    
  };

  return (
    <button onClick={handleKakaoShare}>
      <KakaoSVG />
    </button>
  );
};

export const FacebookShareButton = ({ subject }) => {
  const location = useLocation();
  const baseUrl = "https://openmind-10-1.netlify.app" 
  const handleFacebookShare = () => {
    window.FB.ui({
      method: "share",
      href: `${baseUrl}${location.pathname}`,
    });
  };
  
  return (
    <>
      <button onClick={handleFacebookShare}>
      <FacebookSVG />
    </button>
    <Helmet>
      <meta property="og:title" content={`오픈마인드: ${subject.name}`} />
      <meta property="og:description" content={`${subject.name}님의 오픈마인드입니다.`} />
      <meta property="og:image" content={subject.imageSource || Thumbnail} />
      <meta property="og:url" content={`${baseUrl}${window.location.pathname}`} />
      <meta property="og:type" content="website" />
      <title>오픈마인드: {subject.name}</title>
    </Helmet>
    </>
    
  );
};

export const LinkShareButton = () => {
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const baseUrl = "https://openmind-10-1.netlify.app" 
  const handleLinkCopy = () => {
    
    console.log(location);
    const url = `${baseUrl}${location.pathname}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 5000);
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  return (
    <div>
      <button onClick={handleLinkCopy}>
        <LinkSVG />
      </button>
      {copied && <div className="toast-message">URL이 복사되었습니다.</div>}
    </div>
  );
};
