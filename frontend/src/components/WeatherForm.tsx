import { useState } from "react";

import { Button } from "./ui/button";
import SearchInput from "./SearchInput";

interface WeatherFormProps {
  onSearch: (city: string) => void;
}

export default function WeatherForm({ onSearch }: WeatherFormProps) {
  const [city, setCity] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="flex gap-2">
      <form action="" onSubmit={handleSubmit} className="flex gap-2 w-full">
        <SearchInput
          placeholder="Search for a city..."
          onChange={(e) => setCity(e)}
          value={city}
        />
        <Button
          className="cursor-pointer text-white font-bold py-2 px-4 rounded active:scale-95 transition-transform duration-200 ease-in-out bg-blue-500 hover:bg-blue-600"
          type="submit"
        >
          Get Weather
        </Button>
      </form>
    </div>
  );
}
