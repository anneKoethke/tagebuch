import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
    <Navigator>
      <Screen 
        name="Home" 
        component={Home}
        options={ ({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} title='TagebuchApp' />,
            }
          }
        }
      />
      <Screen 
        name="ReviewDetails" 
        component={ReviewDetails} 
        options={{ title: 'Review Details' }} 
      /> 
    </Navigator>
);


export default HomeStack;