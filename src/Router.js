import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <Route path="/" element={<Main />} />
        <Route path="/list/ListSubjects" element={<ListSubjects />} />
        <Route path="/post/question/PostWithQuestion" element={<PostWithQuestion />} />
        <Route path="/post/question/PostNoneQuestion" element={<PostNoneQuestion />} />
        <Route path="/post/question/PostWriteQuestion" element={<PostWriteQuestion />} />
        <Route path="/post/answer/WriteAnswer" element={<WriteAnswer />} />
        <Route path="/post/answer/EditAnswer" element={<EditAnswer />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router;