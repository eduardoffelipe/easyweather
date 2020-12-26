// eslint-disable-next-line no-use-before-define
import React from 'react';
import { formatTime, round } from '@utils';

// styles
import { Container, Card, Hour, Icon, List, Temperature } from './styles';

type Props = {
  list: HourlyProps[];
};

const Hourly: React.FC<Props> = ({ list }) => {
  return (
    <Container>
      <List
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card>
            <Hour>{formatTime(item.dt)}</Hour>
            <Icon
              source={{
                uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
              }}
              resizeMode="contain"
            />
            <Temperature>{round(item.temp)}ºC</Temperature>
          </Card>
        )}
      />
    </Container>
  );
};

export default Hourly;
