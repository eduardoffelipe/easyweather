import React from 'react';

import { round } from '@utils';
import {
  Infos,
  ContainerMainInfo,
  SubInfo,
  LabelSubInfo,
  TextMainInfo,
  ContainersubInfo,
  TextSubInfo,
  IconAngleDown,
  IconAngleUp,
  IconV,
  City,
  CityText,
} from './styles';

type Props = {
  dailyWeather: DailyProps;
  currentWeather: WeatherProps;
};

const CurrentWeather: React.FC<Props> = ({ dailyWeather, currentWeather }) => {
  return (
    <>
      <City>
        <CityText>{currentWeather.name}</CityText>
      </City>
      <Infos>
        <ContainersubInfo>
          <SubInfo>
            <LabelSubInfo>Min</LabelSubInfo>
            <IconV>
              <IconAngleDown />
            </IconV>
          </SubInfo>
          <TextSubInfo>{round(dailyWeather?.temp.min)}ºC</TextSubInfo>
        </ContainersubInfo>

        <ContainerMainInfo>
          <TextMainInfo>{round(currentWeather?.main.temp)}ºC</TextMainInfo>
        </ContainerMainInfo>

        <ContainersubInfo>
          <SubInfo>
            <LabelSubInfo>MAX</LabelSubInfo>
            <IconAngleUp />
          </SubInfo>
          <TextSubInfo>{round(dailyWeather?.temp.max)}ºC</TextSubInfo>
        </ContainersubInfo>
      </Infos>
    </>
  );
};

export default CurrentWeather;
