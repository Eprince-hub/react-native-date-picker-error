/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import App from './App';
import {name as appName} from './app.json';

const AppComponent = () => {
  return (
    <PaperProvider>
      {/* <SafeAreaProvider> */}
      <App />
      {/* </SafeAreaProvider> */}
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppComponent);
