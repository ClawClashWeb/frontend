import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import MainPage from "./pages/MainPage.js";
import DeletePage from "./pages/DeletePage.js";
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path="/Delete/:userId" element={<DeletePage />} />

        {/* Route path="다른페이지" element={<다른페이지 />} */}
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
