import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About this App</Text>
      <Text style={globalStyles.paragraph}>Hello and Welcome, friends!</Text>
      <Text style={globalStyles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil veniam ratione fugit odit fugiat nulla explicabo illum! Necessitatibus, eaque quisquam vero itaque aliquid numquam neque et ullam quas. Laborum sapiente, consectetur enim sit dolor, reprehenderit ipsum nostrum unde incidunt praesentium quasi pariatur qui quo laboriosam repudiandae magni doloremque soluta.</Text>
    </View>
  )
}
