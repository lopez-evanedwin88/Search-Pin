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
import RootStack from './src/navigation';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <RootStack />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
