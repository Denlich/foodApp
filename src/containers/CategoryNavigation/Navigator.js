import React, { useState, useRef } from 'react';
import {
  View,
  Dimensions,
  Animated,
} from 'react-native';

import Paginator from './components/Paginator';
import FlatListContainer from './components/FlatListContainer';

import navigator from './styles/navigator';

const display = Dimensions.get('window');

export default function Navigator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const pan = useRef(new Animated.ValueXY()).current;

  const scrollToIndex = (i) => {
    slidesRef.current.scrollToIndex({ animated: true, index: i})
  }

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const data = [
    { id: '0', text: 'Burgers' },
    { id: '1', text: 'Pizza' },
    { id: '2', text: 'Noodles' },
    { id: '3', text: 'Salad' }
  ];

  return (
    <View style={navigator.container}>
      <Paginator 
        width={display.width}
        data={data} 
        pan={pan} 
        scrollToIndex={scrollToIndex} 
      />

      <FlatListContainer 
        display={display}
        data={data}
        pan={pan}
        viewableItemsChanged={viewableItemsChanged}
        slidesRef={slidesRef}
      />
    </View>
  );
}