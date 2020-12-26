import React from 'react';

import { formatTime, round } from '@utils';
import {
  Container,
  Detail,
  Row,
  TextDetail,
  Title,
  TitleDetail,
} from './styles';

type Props = {
  currentWeather: WeatherProps;
};

const WeatherDetails: React.FC<Props> = ({ currentWeather }) => {
  return (
    <Container>
      <Title>{currentWeather.weather[0].description}</Title>
      <Row>
        <Detail>
          <TitleDetail>sensação térmica</TitleDetail>
          <TextDetail>{round(currentWeather.main.feels_like)}ºC</TextDetail>
        </Detail>
        <Detail>
          <TitleDetail>umidade do ar</TitleDetail>
          <TextDetail>{currentWeather.main.humidity}%</TextDetail>
        </Detail>
      </Row>
      <Row>
        <Detail>
          <TitleDetail>nascer do sol</TitleDetail>
          <TextDetail>{formatTime(currentWeather.sys.sunrise)}</TextDetail>
        </Detail>
        <Detail>
          <TitleDetail>por do sol</TitleDetail>
          <TextDetail>{formatTime(currentWeather.sys.sunset)}</TextDetail>
        </Detail>
      </Row>
    </Container>
  );
};

export default WeatherDetails;
