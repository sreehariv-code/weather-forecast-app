import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface WeatherFormProps {
  onSearch: (city: string) => void;
}

export default function WeatherForm({ onSearch }: WeatherFormProps) {
  const [city, setCity] = useState<string>("");
  return (
    <div className="flex gap-2">
      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="w-1/2"
      />
      <Button
        onClick={() => {
          if (city) {
            onSearch(city);
            setCity("");
          }
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Weather
      </Button>
    </div>
  );
}
