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
  WebLoginView
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

// const FarmDetailsStack = createStackNavigator({
//   FarmDetails: FarmDetailsView,
// });

// FarmDetailsStack.navigationOptions = {
//   tabBarLabel: 'Farm Details',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
//     />
//   ),
// };

const LinksStack = createStackNavigator({
  Links: LinksScreen,
  FarmDetailsView,
  WebDonationView
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Fields',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});


