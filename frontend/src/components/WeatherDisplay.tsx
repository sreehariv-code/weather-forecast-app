import { Card, CardContent } from "./ui/card";

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
}

export default function WeatherDisplay({ data }: { data: WeatherData }) {
  console.log("Weather data:", data);
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold">{data.city}</h2>
        <p className="text-2xl">{data.temperature}</p>
        <p className="text-gray-500">{data.description}</p>
      </CardContent>
    </Card>
  );
}
