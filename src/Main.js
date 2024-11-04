import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />

        {/* Route path="다른페이지" element={<다른페이지 />} */}
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
