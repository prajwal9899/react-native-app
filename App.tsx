import React from 'react';
import {NativeBaseProvider, Text, Box} from 'native-base';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import NotVerifyScreen from './Screens/NotVerifyScreen';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <HomeScreen />
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      {/* <NotVerifyScreen /> */}
    </NativeBaseProvider>
  );
}
export default App;
