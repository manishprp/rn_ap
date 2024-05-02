import React from 'react';
import {Image, StyleSheet} from 'react-native';

function RoundedImage({image}) {
  return (
    <>
      {image ? (
        <Image style={styles.image} source={image} />
      ) : (
        <Image style={styles.image} source={require('../../asset/user.png')} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#e2e2e2',
    borderRadius: 30,
    height: 60,
    width: 60,
  },
});
export default RoundedImage;
