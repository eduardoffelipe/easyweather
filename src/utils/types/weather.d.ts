/* eslint camelcase: 0 */
declare type Coords = {
  latitude: number;
  longitude: number;
};

declare type WeatherProps = {
  dt: number;
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      description: string;
    },
  ];
};

declare type DailyProps = {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
};

declare type HourlyProps = {
  dt: number;
  temp: number;
  weather: [
    {
      icon: string;
      description: string;
    },
  ];
};

declare type WeatherApi = {
  appid: string;
  lat?: number;
  lon?: number;
  lang: string;
  units: string;
};
