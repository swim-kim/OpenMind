import { useEffect, useState } from "react";
import { ReactComponent as KakaoSVG } from "../../assets/buttonshare/Type=Kakao.svg";
import { ReactComponent as FacebookSVG } from "../../assets/buttonshare/Type=Facebook.svg";
import { ReactComponent as LinkSVG } from "../../assets/buttonshare/Type=Link.svg";
import "./Button.css";
import "./Toast.css";

export const KakaoShareButton = () => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("4efde28e8b63fd9c48dfdf697ecbf6d6");
    }
  }, []);

  const handleKakaoShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "카카오톡 공유하기",
        description: "카카오톡으로 공유하는 예시입니다.",
        imageUrl:
          "https://www.google.co.kr/imgres?q=%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1%20%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98&imgurl=https%3A%2F%2Ft1.kakaocdn.net%2Festoreweb%2Fimages%2F20240812174112%2Fimg_completed.png&imgrefurl=https%3A%2F%2Fe.kakao.com%2Fstore%2Fpc_complete%3Ft_ch%26complete%3Dtrue%26gift%3Dfalse&docid=fgU43MoR1M1ZBM&tbnid=2VMBgqfwEmJsQM&vet=12ahUKEwiZwpex_eyIAxWAha8BHdjVLWEQM3oECHoQAA..i&w=420&h=420&hcb=2&ved=2ahUKEwiZwpex_eyIAxWAha8BHdjVLWEQM3oECHoQAA",
        link: {
          mobileWebUrl: "https://openmind-api.vercel.app/10-1/",
          webUrl: "https://openmind-api.vercel.app/10-1/",
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

export const FacebookShareButton = () => {
  const handleFacebookShare = () => {
    window.FB.ui({
      method: "share",
      href: "https://openmind-api.vercel.app/10-1/",
    });
  };

  return (
    <button onClick={handleFacebookShare}>
      <FacebookSVG />
    </button>
  );
};

export const LinkShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleLinkCopy = () => {
    const url = "https://openmind-api.vercel.app/10-1/";
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
