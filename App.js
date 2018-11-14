import React from 'react';
import {TabNavigator} from 'react-navigation';
 import {Home} from './Tampilan/Home';
import {Hero} from './Tampilan/Hero';
import {Setting} from './Tampilan/Setting';
 const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Hero,
  },
  Settings: {
    screen: Setting,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#007bff',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#0e6bed',
    },
     labelStyle: {
      fontSize: 10,
      color: 'white',
      padding: 4,
    }
  }
});
 export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}
