import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import { AppNavigator } from './routes/AppNavigator';

const getFonts = () => Font.loadAsync({
  'permanent-marker': require('./assets/fonts/Permanent_Marker/PermanentMarker-Regular.ttf'),
  'kalam-light': require('./assets/fonts/Kalam/Kalam-Light.ttf'),
  'kalam-regular': require('./assets/fonts/Kalam/Kalam-Regular.ttf'),
  'kalam-bold': require('./assets/fonts/Kalam/Kalam-Bold.ttf')
});

export default function App() {

  // Font can be used in the StyleSheet of each component / screen
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // tracking if Fonts are ready loaded: AppLoading for async loading the fonts
  if(fontsLoaded) {
    return <AppNavigator />;
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
