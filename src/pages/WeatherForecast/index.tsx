import React, { useCallback } from 'react';
import {
  Button,
  CurrentWeather,
  WeatherDetails,
  WeatherHour,
} from '@components';
import LogoImage from '@images/logosmall.png';
import { inject, observer } from 'mobx-react';
import { credentials } from '@services';
import { WeatherStore } from '@store';
import { useRoute } from '@react-navigation/native';
import {
  Background,
  Container,
  Logo,
  Header,
  Body,
  LogoText,
  Refresh,
  ListForecast,
  Current,
  Details,
} from './styles';

type Props = {
  weather: WeatherStore;
};

type Coordenadas = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

const WeatherForecast: React.FC<Props> = ({ weather }) => {
  const route = useRoute();
  const coordenadas = route.params as Coordenadas;
  const { currentWeather, hourlyWeather, dailyWeather } = weather;

  const handleRefresh = useCallback(async (): Promise<void> => {
    const params = {
      appid: credentials.APPID,
      lat: coordenadas.coords.latitude,
      lon: coordenadas.coords.longitude,
      lang: credentials.lang,
      units: credentials.units,
    };
    await weather.getCurrentWeather(params);
    await weather.getHourlyWeather(params);
  }, [weather, coordenadas]);

  return (
    <Background>
      <Container>
        <Header>
          <Logo source={LogoImage} />
          <LogoText>EasyWeather</LogoText>
        </Header>
        <Body>
          <Current>
            <CurrentWeather
              currentWeather={currentWeather}
              dailyWeather={dailyWeather}
            />
          </Current>
          <Details>
            <WeatherDetails currentWeather={currentWeather} />
          </Details>
          <Refresh>
            <Button onPress={() => handleRefresh()}>Atualizar</Button>
          </Refresh>
          <ListForecast>
            <WeatherHour list={hourlyWeather} />
          </ListForecast>
        </Body>
      </Container>
    </Background>
  );
};

export default inject('weather')(observer(WeatherForecast));
