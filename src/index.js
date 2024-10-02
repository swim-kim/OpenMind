
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styles/global.css"
import App from './App';
import "./styles/global.css";
import QuestionListPage from './pages/QuestionListPage/QuestionListPage';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <QuestionListPage/>
  </React.StrictMode>
);
