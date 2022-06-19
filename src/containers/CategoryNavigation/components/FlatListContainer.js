import React, { useState, useRef } from 'react';
import {
  View,
  Animated
} from 'react-native';

import { category } from '../config/category';
import FilterRender from './FilterRender';

export default function FlatListContainer({ display, data, pan, viewableItemsChanged, slidesRef }) {
  return (
    <Animated.FlatList      
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      paddingEnabled
      snapToInterval={display.width}
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

      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const data=category[item.text];

        return (
          <View style={{flex: 1, width: display.width}}>
            <FilterRender 
              data={data}
              display={display}
            />
          </View>
        );
      }}
    />
  );
}