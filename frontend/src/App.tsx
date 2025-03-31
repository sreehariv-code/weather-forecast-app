import { useState } from "react";
import { fetchWeather } from "./lib/api";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [city, setCity] = useState("New York");

  const { data, isLoading, error } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
  });
  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <WeatherForm onSearch={setCity} />
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && <WeatherDisplay data={data} />}
    </div>
  );
}

export default App;
