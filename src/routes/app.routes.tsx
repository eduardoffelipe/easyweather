import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '@theme';
import { Home, WeatherForecast } from '@pages';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: colors.buttonText },
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="WeatherForecast" component={WeatherForecast} />
  </Stack.Navigator>
);

export default Routes;
