import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionListPage from "./pages/QuestionListPage/QuestionListPage";
import ArrayCard from "./pages/QuestionListPage/components/user_card/ArrayCard";
import FeedCard from "./components/FeedCard";
import PostQuestionPage from "./pages/PostQuestionPage/PostQuestionPage";
import PostAnswerPage from "./pages/PostAnswerPage/WriteAnswer";
import QuestionModal from "./components/QuestionModal";
import Main from "./pages/MainPage/Main";




function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/list" element={<QuestionListPage />} />
				<Route path="/post/:subjectId" element={<PostQuestionPage />} />
				{/* 메인페이지에서 라우팅 */}
				<Route path="/post/answer/WriteAnswer" element={<PostAnswerPage />} />
				{/* 리스트페이지에서 라우팅 */}
				<Route path="/post/:subjectId/answer" element={<PostAnswerPage />} />
				<Route path="/post/:subjectId/questions" element={<QuestionModal />} />
			</Routes>
		</BrowserRouter>
	);

}
export default Router;
