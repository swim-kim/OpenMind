import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionListPage from "./pages/QuestionListPage/QuestionListPage";
import FeedCard from "./components/FeedCard";

import Main from "./pages/Main";
import ListSubjects from "./pages/list/ListSubjects";
import PostWithQuestion from "./pages/post/Question/PostWithQuestion";
import PostNoneQuestion from "./pages/post/Question/PostNoneQuestion";
import PostWriteQuestion from "./pages/post/Question/PostWriteQuestion";
import WriteAnswer from "./pages/post/Answer/WriteAnswer";
import EditAnswer from "./pages/post/Answer/EditAnswer";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questionlist" element={<QuestionListPage />} />
        <Route path="/feedCard" element={<FeedCard />} />
      </Routes>
    </BrowserRouter>
  );

}
export default Router;
