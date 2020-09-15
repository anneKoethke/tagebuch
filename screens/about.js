import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  
  const handlePress = () => {
    Linking.openURL("https://www.youtube.com/watch?v=ur6I5m2nTvk&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=1");
  };

  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About this App</Text>
      <Text style={[globalStyles.first, globalStyles.paragraph]}>Hello and Welcome, friends!</Text>
      <Text style={globalStyles.paragraph}>
        This is my version of the TheNetNinja's React Native Tutorial 
        <Text style={[styles.link, globalStyles.paragraph]} onPress={handlePress}> on YouTube </Text>
        with some changes (due to RN developement) and some addOns (because I want to do more stuff here, e.g. unique item.key via timestamp).
      </Text>
      <Text style={globalStyles.paragraph}>This is not planned for release, so don't even ask about iPhone... Apple makes me instantly want to give a new bad mood entry in this app :P </Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
})