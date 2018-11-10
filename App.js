import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { Camera, Permissions } from 'expo';


const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
},
{
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#45b7b8' },
  },);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
