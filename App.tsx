/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import MainScreen from './src/screens/MainScreen';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <MainScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
