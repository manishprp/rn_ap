import React from 'react';

import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const APPBAR_HEIGHT = 56;

function BackIconAndProfile({
  backIcon,
  profilePic,
  onPress,
  arrowStyle,
  imageStyle,
  style,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.navigateBackContainer, style]}>
        {backIcon ? (
          <Image style={[styles.backIcon, arrowStyle]} source={backIcon} />
        ) : (
          <Image
            style={[styles.backIcon, arrowStyle]}
            source={require('../../asset/arrow.png')}
          />
        )}
        {profilePic ? (
          <Image
            style={[styles.profilePhoto, imageStyle]}
            source={profilePic}
          />
        ) : (
          <Image
            style={[styles.profilePhoto, imageStyle]}
            source={require('../../asset/user_white.png')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    height: 20,
    width: 18,
  },
  navigateBackContainer: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    height: APPBAR_HEIGHT,
    justifyContent: 'center',
    padding: 10,
  },
  profilePhoto: {
    color: 'white',
    height: 22,
    width: 22,
  },
});
export default BackIconAndProfile;
