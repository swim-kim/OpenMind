import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionListPage from "./pages/QuestionListPage/QuestionListPage";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/questionlist" element={<QuestionListPage />} />
			</Routes>
		</BrowserRouter>
	);
}
export default Router;
