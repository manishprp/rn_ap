import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FromMetaIcon, WhatsappSplashIcon} from '../../asset/svg_images';

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <WhatsappSplashIcon />
      </View>
      <View style={styles.from}>
        <FromMetaIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  from: {
    bottom: 20,
    height: 115,
    position: 'absolute',
    width: '100%',
  },
  logo: {
    height: 115,
    width: 115,
  },
});
export default SplashScreen;
