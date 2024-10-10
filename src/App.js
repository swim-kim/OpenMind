import React, { useEffect } from "react";
import "./styles/global.css";
import Router from "./Router";

function App() {
  useEffect(() => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("4efde28e8b63fd9c48dfdf697ecbf6d6");
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
        appId: 3819506264969417,
        xfbml: true,
        version: 'v21.0',
      });
    };
  }, []);
  

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
