import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from "./HomeStack";
import SavedStack from "./SavedStack";
import CartStack from "./CartStack";
import ProfileStack from "./ProfileStack"

import color from '../config/color';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarInactiveBackgroundColor: color.white,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          marginVertical: 5
        },
        tabBarShowLabel: false,

        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            HomeStack: "home-outline",
            SavedStack: "heart-outline",
            CartStack: "cart-outline",
            ProfileStack: "account-outline",
          };
          
          (focused) ? color='#eee' : color='#fff';

          return (
            <Icon bgColor={color} color={'#000'} name={icons[route.name]} size={size} />
          );
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="SavedStack" component={SavedStack} />
      <Tab.Screen name="CartStack" component={CartStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
}