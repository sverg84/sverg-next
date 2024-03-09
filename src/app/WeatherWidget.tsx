import Image from "next/image";
import { WeatherData } from "./types/WeatherData";
import { Card } from "flowbite-react";

async function genData(): Promise<WeatherData> {
  const response = await fetch(
    "https://vjkuarupgi.execute-api.us-east-2.amazonaws.com/default"
  );

  return await response.json();
}

export default async function WeatherWidget() {
  const weather = await genData();

  const gradient = weather.night
    ? "bg-gradient-to-t from-night-sky to-night-sky-2"
    : "bg-gradient-to-br from-blue-600 to-cyan-200";

  return (
    <figure
      className={`fixed bottom-4 right-4 flex flex-col items-center p-2 rounded-2xl ${gradient} animate-fade-in-right`}
    >
      <h5 className="font-bold">{weather.city}</h5>
      <Image
        alt={weather.description}
        className="-my-2"
        height={64}
        width={64}
        src={weather.icon}
      />
      <figcaption className="font-bold">
        {weather.fahrenheit}&deg;F / {weather.celsius}&deg;C
      </figcaption>
    </figure>
  );
}
