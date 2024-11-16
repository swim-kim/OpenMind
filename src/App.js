import React, { useEffect } from "react";
import "./styles/global.css";
import Router from "./Router";

function App() {
  useEffect(() => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKKAO);
        console.log("카카오 SDK 초기화 완료");
      } else {
        console.log("Kakao SDK는 이미 초기화되었습니다.");
      }
    } else {
      console.error("Kakao SDK가 로드되지 않았습니다.");
    }
  }, []);

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOK,
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);
  
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
