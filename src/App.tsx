import MainLayout from "./layouts/main_layout";
import AboutMePage from "./pages/about_me";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<AboutMePage/>}/>
          <Route path="about-me" element={<AboutMePage/>} />
          <Route path="works" />
          <Route path="article" />
          <Route path="contact" element={<ContactPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
