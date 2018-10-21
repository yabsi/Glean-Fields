import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FarmDetailsView from '../screens/FarmDetailsView'
import WebDonationView from '../screens/WebDonationView'
import WebLoginView from '../screens/WebLoginView'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  WebLoginView,
  LinksScreen,
  FarmDetailsView,
  WebDonationView
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-log-in${focused ? '' : '-outline'}`
          : 'md-log-in'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-help${focused ? '' : '-outline'}` : 'md-help'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
});


