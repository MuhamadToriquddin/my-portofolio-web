import MainLayout from "./layouts/main_layout";
import AboutMePage from "./pages/about_me";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/contact";
import WorkPage from "./pages/work";
import ArticlePage from "./pages/article";
import DetailLayoutWork from "./layouts/detail_layout_work";
import DetailLayoutArticle from "./layouts/detail_layout_article";
import DetailWorkPage from "./pages/detail_work";
import DetailArticlePage from "./pages/detail_article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<AboutMePage/>}/>
          
          <Route path="works">
            <Route index element={<WorkPage/>}></Route>
            <Route path=":id" element={<DetailLayoutWork/>}>
              <Route index element={<DetailWorkPage/>}></Route>
            </Route>
          </Route>
          <Route path="articles"  >
            <Route index element={<ArticlePage/>}></Route>
            <Route path=":id" element={<DetailLayoutArticle/>}>
              <Route index element={<DetailArticlePage/>}></Route>
            </Route>
          </Route>
          <Route path="contact" element={<ContactPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
