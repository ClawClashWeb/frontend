import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import LoginPage from "./pages/LoginPage.js";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          
          {/* Route path="다른페이지" element={<다른페이지 />} */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
