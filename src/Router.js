import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionListPage from "./pages/QuestionListPage/QuestionListPage";
import ArrayCard from "./pages/QuestionListPage/components/user_card/ArrayCard";
import FeedCard from "./components/FeedCard";
import PostQuestionPage from "./pages/PostQuestionPage/PostQuestionPage";
import PostAnswerPage from "./pages/PostAnswerPage/WriteAnswer";


function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<QuestionListPage />} />
				<Route path="/list" element={<QuestionListPage />} />
				<Route path="/post/:subjectId" element={<PostQuestionPage />} />
				<Route path="/post/answer" element={<PostAnswerPage />} />
			</Routes>
		</BrowserRouter>
	);

}
export default Router;
