import { getWeatherIconUrl } from "@/lib/utils";
import { Droplets, MapPin, Wind } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { type WeatherData } from "@/lib/api";

export default function WeatherCard({
  location,
  country,
  temperature,
  description,
  icon,
  high,
  humidity,
  low,
  windSpeed,
}: WeatherData) {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              {location}, {country}
            </CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{temperature}°F</div>
            <div className="text-sm text-muted-foreground capitalize">
              {description}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <img src={getWeatherIconUrl(icon)} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div className="flex items-center">High: {high}°F</div>
            <div className="flex items-center">Low: {low}°F</div>
            <div className="flex items-center">
              <Droplets className="h-4 w-4 mr-2" />
              Humidity: {humidity}%
            </div>
            <div className="flex items-center">
              <Wind className="h-4 w-4 mr-2" />
              Wind: {windSpeed} mph
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
