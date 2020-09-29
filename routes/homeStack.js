import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import EntryDetails from '../screens/entryDetails';
import Header from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black'
        }
      }}
    >
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
        name="EntryDetails" 
        component={EntryDetails} 
        options={{ title: 'Entry Details', headerTintColor: '#fff' }} 
      /> 
    </Navigator>
);


export default HomeStack;