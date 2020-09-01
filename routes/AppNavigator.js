import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack'; 
import CalendarStack from './calendarStack';

const { Navigator, Screen } = createDrawerNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator initialRouteName="HomeStack">
      <Screen name="Home" component={HomeStack} />
      <Screen name="About" component={AboutStack} />
      <Screen name="Calendar" component={CalendarStack} />
    </Navigator>
  </NavigationContainer>
);