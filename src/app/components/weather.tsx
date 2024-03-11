import { Tooltip } from "flowbite-react";
import Image from "next/image";

type WeatherData = Readonly<{
  celsius: number;
  city: string;
  description: string;
  fahrenheit: number;
  icon: string;
  night: boolean;
}>;

const SEATTLE_LATITUDE = 47.6061;
const SEATTLE_LONGITUDE = -122.3328;

async function genData(): Promise<WeatherData> {
  const baseUrl = "https://api.openweathermap.org/";
  const id = `&appid=${process.env.WEATHER_TOKEN}`;

  const weatherUri = `${baseUrl}data/2.5/weather?lat=${SEATTLE_LATITUDE}&lon=${SEATTLE_LONGITUDE}${id}`;

  const init = { next: { revalidate: 60 } };

  const [responseImperial, responseMetric] = await Promise.all([
    fetch(`${weatherUri}&units=imperial`, init),
    fetch(`${weatherUri}&units=metric`, init),
  ]);

  const [dataImperial, dataMetric] = await Promise.all([
    responseImperial.json(),
    responseMetric.json(),
  ]);

  const {
    main: { temp: fahrenheit },
    name: city,
    weather: [weather],
  } = dataImperial;

  const {
    main: { temp: celsius },
  } = dataMetric;

  const { description, icon } = weather;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return {
    city,
    description,
    icon: iconUrl,
    night: icon.slice(2) === "n",
    fahrenheit: Math.round(fahrenheit),
    celsius: Math.round(celsius),
  };
}

export default async function WeatherWidget() {
  const weather = await genData();

  const gradient = weather.night
    ? "bg-gradient-to-t from-night-sky to-night-sky-2"
    : "bg-gradient-to-br from-blue-600 to-cyan-200";

  return (
    <figure
      className={`fixed bottom-20 right-4 z-10 flex flex-col items-center rounded-2xl p-2
      text-white ${gradient} animate-fade-in-right motion-reduce:animate-none`}
    >
      <h2 className="font-bold">{weather.city}</h2>
      <Tooltip content={weather.description} placement="left">
        <Image
          alt={weather.description}
          className="-my-2"
          height={64}
          width={64}
          src={weather.icon}
        />
      </Tooltip>
      <figcaption className="font-bold">
        {weather.fahrenheit}&deg;F / {weather.celsius}&deg;C
      </figcaption>
    </figure>
  );
}

export const runtime = "edge";
