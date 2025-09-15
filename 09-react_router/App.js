import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>홈 페이지입니다.</h2>
      <Link to="/about">소개 페이지로 이동</Link>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h2>소개 페이지입니다.</h2>
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <h1>나의 라우팅 연습</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
