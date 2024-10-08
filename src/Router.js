import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionListPage from "./pages/QuestionListPage/QuestionListPage";
import ArrayCard from "./pages/QuestionListPage/components/user_card/ArrayCard";
import FeedCard from "./components/FeedCard";
import PostQuestionPage from "./pages/PostQuestionPage/PostQuestionPage";


function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/feedCard" element={<FeedCard />} />
				
				<Route path="/list" element={<QuestionListPage />} />
				<Route path="/post/:subjectId" element={<PostQuestionPage />} />
			</Routes>
		</BrowserRouter>
	);

} 
export default Router;
