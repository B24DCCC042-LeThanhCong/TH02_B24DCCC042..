import React, { useState } from "react";
import axios from "axios";

interface Weather {
  temp_C: string;
  weatherDesc: { value: string }[];
}

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Vui lòng nhập tên thành phố!");
      return;
    }
    try {
      const res = await axios.get(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(
          `https://wttr.in/${city}?format=j1`
        )}`
      );
      const data = res.data.current_condition[0];
      setWeather(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Không thể lấy dữ liệu thời tiết (có thể bị chặn CORS).");
      setWeather(null);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🌦 Ứng dụng Thời tiết</h2>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nhập tên thành phố"
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={fetchWeather}>Xem thời tiết</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "10px" }}>
          <p>Nhiệt độ: {weather.temp_C}°C</p>
          <p>Tình trạng: {weather.weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
