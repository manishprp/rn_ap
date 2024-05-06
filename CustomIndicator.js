import React from 'react';
import {Animated} from 'react-native';

export function CustomIndicator(moveXCopy, isVisible, eachIndicatorWidth) {
  if (!isVisible) {
    //console.log('returning null', moveXCopy, isVisible, eachIndicatorWidth);
    return null;
  }
  console.log('returning view', moveXCopy, isVisible, eachIndicatorWidth);
  return (
    <Animated.View
      style={{
        transform: [{translateX: 100}, {translateY: 0}],
        height: 10,
        width: eachIndicatorWidth,
        backgroundColor: '#fff',
      }}></Animated.View>
  );
}
