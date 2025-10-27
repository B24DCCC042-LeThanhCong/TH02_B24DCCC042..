import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setStudent(res.data))
      .catch(console.error);
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chi tiết sinh viên</h2>
      {student ? (
        <>
          <p>Họ tên: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Điện thoại: {student.phone}</p>
          <p>Website: {student.website}</p>
        </>
      ) : (
        <p>Đang tải...</p>
      )}
      <Link to="/students">⬅ Quay lại</Link>
    </div>
  );
};

export default StudentDetail;
