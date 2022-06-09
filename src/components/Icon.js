import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({ bgColor, color, name, size }) {
  return (
    <View style={{
      backgroundColor: bgColor,
      borderRadius: 999,
      padding: 5
    }}>
      <MaterialCommunityIcons
        name={name}
        color={color}
        size={size}
      />
    </View>
  );
}