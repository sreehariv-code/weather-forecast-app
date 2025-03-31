import axios from "axios";
export async function fetchWeather(city: string) {
  const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
  if (response.status !== 200) {
    throw new Error("Error fetching weather data");
  }
  return response.data;
}
