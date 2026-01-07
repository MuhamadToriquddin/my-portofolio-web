import MainLayout from "./layouts/main_layout";
import AboutMePage from "./pages/about_me";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/contact";
import WorkPage from "./pages/work";
import ArticlePage from "./pages/article";
import DetailLayout from "./layouts/detail_layout";
import DetailWorkPage from "./pages/detail_work";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<AboutMePage/>}/>
          <Route path="about-me" element={<AboutMePage/>} />
          <Route path="works">
            <Route index element={<WorkPage/>}></Route>
            <Route path=":id" element={<DetailLayout/>}>
              <Route index element={<DetailWorkPage/>}></Route>
            </Route>
          </Route>
          <Route path="articles"  >
            <Route index element={<ArticlePage/>}></Route>
            <Route path=":id"></Route>
          </Route>
          <Route path="contact" element={<ContactPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
