import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import WeatherForm from "./components/WeatherForm";
import { fetchCurrentWeather } from "./lib/api";

function App() {
  const [city, setCity] = useState("New York");

  const {
    data: currentWeather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchCurrentWeather(city),
    enabled: !!city,
  });
  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6">
      <WeatherForm onSearch={setCity} />
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {currentWeather && (
        <WeatherCard
          location={currentWeather.location}
          country={currentWeather.country}
          temperature={currentWeather.temperature}
          description={currentWeather.condition}
          icon={currentWeather.icon}
          high={currentWeather.high}
          humidity={currentWeather.humidity}
          low={currentWeather.low}
          windSpeed={currentWeather.windSpeed}
          // timestamp={currentWeather.timestamp}
          // className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
        />
      )}
      {/* {data && <WeatherDisplay data={data} />} */}
    </div>
  );
}

export default App;
