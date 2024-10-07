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
				<Route path="/post" element={<PostQuestionPage />} />
				<Route path="/List" element={<QuestionListPage />} />
				<Route path="/cards/:id" element={ArrayCard} />
			</Routes>
		</BrowserRouter>
	);

} 
export default Router;
