import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

function TappableImage({style, onPress, source}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={[style]} source={source} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default TappableImage;
