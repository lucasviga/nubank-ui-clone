import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Dashboard} from './pages/Dashboard';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#820AD1" barStyle="light-content" />

      <GestureHandlerRootView>
        <Dashboard />
      </GestureHandlerRootView>
    </>
  );
};

export default App;
