import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/:city", async (req, res) => {
  try {
    const { city } = req.params;
    const apiKey = process.env.WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(apiUrl);
    const weatherData = {
      location: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      condition: response.data.weather[0].description,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      timestamp: response.data.dt,
    };
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather data" });
  }
});

export default router;
