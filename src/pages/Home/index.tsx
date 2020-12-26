import React, { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { getLocationPermission } from '@utils';
import { Loading, CurrentWeather, Button } from '@components';
import { credentials } from '@services';

import { inject, observer } from 'mobx-react';
import { WeatherStore } from '@store';
import LogoImage from '@images/logo.png';

import {
  Container,
  Header,
  Sun,
  Body,
  Title,
  Footer,
  Background,
  WeatherInfo,
} from './styles';

type Props = {
  weather: WeatherStore;
};

const Home: React.FC<Props> = ({ weather }) => {
  const { dailyWeather, currentWeather } = weather;
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [coords, setCoords] = useState<Coords>();

  const handleNavigation = (): void => {
    navigation.navigate('WeatherForecast', {
      coords,
    });
  };
  const getWeather = useCallback(async (): Promise<void> => {
    try {
      const { latitude, longitude } = await getLocationPermission();
      setCoords({ latitude, longitude });
      const params = {
        appid: credentials.APPID,
        lat: latitude,
        lon: longitude,
        lang: credentials.lang,
        units: credentials.units,
      };
      await weather.getCurrentWeather(params);
      await weather.getHourlyWeather(params);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [weather]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  if (!isLoading) {
    return (
      <Background>
        <Container>
          <Header>
            <Title>EasyWeather</Title>
          </Header>

          <Body>
            <Sun source={LogoImage} />
            <WeatherInfo />
            <CurrentWeather
              dailyWeather={dailyWeather}
              currentWeather={currentWeather}
            />
          </Body>
          <Footer>
            <Button onPress={() => handleNavigation()}>Ver Detalhes</Button>
          </Footer>
        </Container>
      </Background>
    );
  }
  return (
    <Background>
      <Loading>Carregando</Loading>
    </Background>
  );
};

export default inject('weather')(observer(Home));
