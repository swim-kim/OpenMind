import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionListPage from "./pages/QuestionListPage/QuestionListPage";
import FeedCard from "./components/FeedCard";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/questionlist" element={<QuestionListPage />} />
				<Route path="/feedCard" element={<FeedCard/>} />
			</Routes>
		</BrowserRouter>
	);

}
export default Router;
