import React from 'react';
import {
  View,
  Text
} from 'react-native';

import Screen from '../components/Screen';
import Navigator from '../containers/CategoryNavigation/Navigator';

export default function HomeScreen() {
  return (
    <Screen style={{flex: 1}}>
      <Navigator />
    </Screen>
  );
}