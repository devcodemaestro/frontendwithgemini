import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <header>
        {/* 모든 페이지에 공통적으로 보여질 내용 */}
        <h1>My React App</h1>
        <nav>{/* ... 라우터 링크들 ... */}</nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
