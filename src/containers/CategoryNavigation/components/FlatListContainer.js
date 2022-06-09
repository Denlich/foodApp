import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Animated
} from 'react-native';

export default function FlatListContainer({ width, data, pan, viewableItemsChanged, slidesRef }) {
  return (
    <Animated.FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={{flex: 1, width: width, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{ item.text }</Text>
          </View>
        );
      }}
      
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      paddingEnabled
      snapToInterval={width}
      decelerationRate={'fast'}
      removeClippedSubviews={true}
      disableIntervalMomentum={true}
      scrollEnabled={false}

      onScroll={
        Animated.event([{ nativeEvent: { contentOffset: { x: pan.x } } }],
          {
            useNativeDriver: false,
          },
        )
      }
      onViewableItemsChanged={viewableItemsChanged}
      ref={slidesRef}
    />
  );
}