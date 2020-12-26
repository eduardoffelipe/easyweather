import { action, observable } from 'mobx';
import { api, constants } from '@services';

const defaultCurrentWeather: WeatherProps = {
  dt: 0,
  name: '',
  main: {
    temp: 0,
    feels_like: 0,
    humidity: 0,
  },
  sys: {
    sunrise: 0,
    sunset: 0,
  },
  weather: [
    {
      description: '',
    },
  ],
};

const defaultDailyWeather: DailyProps = {
  dt: 0,
  temp: {
    min: 0,
    max: 0,
  },
};

const defaultHourlyWeather: HourlyProps = {
  dt: 0,
  temp: 0,
  weather: [
    {
      icon: '',
      description: '',
    },
  ],
};

export default class WeatherStore {
  @observable
  currentWeather: WeatherProps = defaultCurrentWeather;

  @observable
  dailyWeather: DailyProps = defaultDailyWeather;

  @observable
  hourlyWeather: HourlyProps = defaultHourlyWeather;

  @action
  getCurrentWeather = async (params: WeatherApi): Promise<void> => {
    const { data } = await api.get(constants.CURRENT_WEATHER, { params });
    this.currentWeather = data;
    console.log(data);
  };

  @action
  getHourlyWeather = async (params: WeatherApi): Promise<void> => {
    const { data } = await api.get(constants.HOURLY_WEATHER, { params });
    this.dailyWeather = data.daily[0];
    this.hourlyWeather = data.hourly;
  };
}
