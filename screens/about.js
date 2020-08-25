import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../shared/global';

export default function About() {
  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenHeaderText}>AboutScreen</Text>
      <Text style={globalStyles.titleText}>About this App</Text>
      <Text style={globalStyles.paragraph}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Text>
    </View>
  )
}
