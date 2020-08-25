import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'; 
import Home from './screens/home';
import About from './screens/about';

const getFonts = () => Font.loadAsync({
  'permanent-marker': require('./assets/fonts/Permanent_Marker/PermanentMarker-Regular.ttf'),
  'kalam-light': require('./assets/fonts/Kalam/Kalam-Light.ttf'),
  'kalam-regular': require('./assets/fonts/Kalam/Kalam-Regular.ttf')
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  if(fontsLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
  
}
