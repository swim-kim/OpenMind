import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionListPage from "./pages/QuestionListPage/QuestionListPage";
import FeedCard from "./components/FeedCard";
import PostQuestionPage from "./pages/PostQuestionPage/PostQuestionPage";


function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/questionList" element={<QuestionListPage />} />
				<Route path="/feedCard" element={<FeedCard />} />
				<Route path="/post" element={<PostQuestionPage />} />
			</Routes>
		</BrowserRouter>
	);

} 
export default Router;
