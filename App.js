import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'; 

const getFonts = () => Font.loadAsync({
  'permanent-marker': require('./assets/fonts/Permanent_Marker/PermanentMarker-Regular.ttf'),
  'kalam-light': require('./assets/fonts/Kalam/Kalam-Light.ttf')
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  if(fontsLoaded) {
    return (
      <View >
        <Text>Tagebuch</Text>
        <StatusBar style="auto" />
      </View>
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
