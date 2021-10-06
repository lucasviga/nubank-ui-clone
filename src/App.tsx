import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Dashboard} from './pages/Dashboard';
import {AccountInfoProvider} from './contexts/AccountInfo';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#820AD1" barStyle="light-content" />

      <GestureHandlerRootView>
        <AccountInfoProvider>
          <Dashboard />
        </AccountInfoProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
