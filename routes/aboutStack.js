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
          backgroundColor: '#000',
        },
        headerTintColor: '#fff', // color of Title and Button
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