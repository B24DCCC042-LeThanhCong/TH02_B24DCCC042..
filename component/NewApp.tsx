import React, { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  summary: string;
  url: string;
  image_url: string;
  published_at: string;
}

const NewsApp: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios.get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then(res => setArticles(res.data.results))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tin tức vũ trụ</h2>
      {articles.map((a) => (
        <div key={a.id} style={{ marginBottom: "20px" }}>
          <img src={a.image_url} alt={a.title} width="200" />
          <h3>{a.title}</h3>
          <p>{a.summary}</p>
          <a href={a.url} target="_blank" rel="noopener noreferrer">Đọc thêm</a>
          <p><i>Ngày đăng: {new Date(a.published_at).toLocaleDateString()}</i></p>
        </div>
      ))}
    </div>
  );
};

export default NewsApp;
