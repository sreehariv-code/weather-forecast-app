import axios from "axios";
export async function fetchCurrentWeather(city: string) {
  const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
  if (response.status !== 200) {
    throw new Error("Error fetching weather data");
  }
  return response.data;
}

export interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  high: number;
  low: number;
  country: string;
}
