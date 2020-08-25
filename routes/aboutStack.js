import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';
import { Image } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
    <Navigator 
      screenOptions={{
        headerTintColor: 'red',
      }}>
      <Screen 
        name="About" 
        component={About}
        //options={{ headerTitle: props => <Header {...props} /> }} 
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