import React, { useState, useRef } from 'react';
import {
  View,
  Dimensions,
  Animated,
} from 'react-native';

import Paginator from './components/Paginator';
import FlatListContainer from './components/FlatListContainer';

import navigator from './styles/navigator';

const width = Dimensions.get('window').width;

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
    { id: '1', text: 'Burgers' },
    { id: '2', text: 'Pizza' },
    { id: '3', text: 'Noodles' },
    { id: '4', text: 'Salad' }
  ];

  return (
    <View style={navigator.container}>
      <Paginator 
        width={width}
        data={data} 
        pan={pan} 
        scrollToIndex={scrollToIndex} 
      />

      <FlatListContainer 
        width={width}
        data={data}
        pan={pan}
        viewableItemsChanged={viewableItemsChanged}
        slidesRef={slidesRef}
      />
    </View>
  );
}