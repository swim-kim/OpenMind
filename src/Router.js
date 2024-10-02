import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedCard from "./components/FeedCard";


function Router() {
  return (
    <BrowserRouter>
        <Routes>
          {/*임시*/}
        <Route path="/feedCard"element={<FeedCard />} />
        </Routes>
    </BrowserRouter>
  )
}
export default Router;