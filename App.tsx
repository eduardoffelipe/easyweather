import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'mobx-react';
import Routes from './src/routes';
import store from './src/store';

const App: React.FC = () => (
  <Provider {...store}>
    <StatusBar barStyle="light-content" backgroundColor='#00d4ff'/>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </Provider>
);

export default App;
