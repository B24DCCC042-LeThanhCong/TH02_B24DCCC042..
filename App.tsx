import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WeatherApp from "./component/WeatherApp";
import StudentList from "./component/StudentList";
import StudentDetail from "./component/StudentDetail";
import NewsApp from "./component/NewApp";
const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#f0f0f0" }}>
        <Link to="/weather" style={{ marginRight: "10px" }}>Thời tiết</Link>
        <Link to="/students" style={{ marginRight: "10px" }}>Sinh viên</Link>
        <Link to="/news">Tin tức</Link>
      </nav>

      <Routes>
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/news" element={<NewsApp />} />
        <Route path="/" element={<h2>Chọn một ứng dụng ở menu trên</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
