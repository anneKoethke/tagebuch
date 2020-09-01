import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calendar from '../screens/calendarView';
import Header from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

const CalendarStack = () => (
    <Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black'
        }
      }}>
      <Screen 
        name="Calendar View" 
        component={Calendar}
        options={
          ({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} title='TagebuchApp' />
            }
          }
        }
      />  
    </Navigator>
);


export default CalendarStack;