import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
    <Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black'
        }
      }}>
      <Screen 
        name="About" 
        component={About}
        options={
          ({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} title='About TagebuchApp' />
            }
          }
        }
      />  
    </Navigator>
);


export default AboutStack;