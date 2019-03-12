import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListeMessage from '../screens/ListeMessage';
import Nouveau from '../screens/NouveauMessage';

export default TabNavigator(
  {
    ListeMessage: {
      screen: ListeMessage,
    },
    Nouveau: {
      screen: Nouveau,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'ListeMessage':
            iconName = Platform.OS === 'ios'
              ? `ios-list${focused ? '' : '-outline'}`
              : 'md-list';
            break;
          case 'Nouveau':
            iconName = Platform.OS === 'ios'
              ? `ios-add${focused ? '' : '-outline'}`
              : 'md-add';
            break;
          case 'Settings':
            iconName = Platform.OS === 'ios'
              ? `ios-options${focused ? '' : '-outline'}`
              : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
  }
);
