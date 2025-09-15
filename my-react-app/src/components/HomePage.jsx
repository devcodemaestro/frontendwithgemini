import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>홈 페이지입니다.</h2>
      <Link to="/about">소개 페이지로 이동</Link>
    </div>
  );
}

export default HomePage;
