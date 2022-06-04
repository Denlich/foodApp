import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SavedScreen from '../screen/SavedScreen';

const Stack = createNativeStackNavigator();

export default function SavedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Saved" component={SavedScreen} />
    </Stack.Navigator>
  );
}