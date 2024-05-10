import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
function ChatBubble({text, isLeft = false}) {
  const {width} = useWindowDimensions();
  let widthOut = width - 100;
  console.log(widthOut);
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          marginBottom: 15,
          marginRight: 0,
          marginLeft: 0,
        },
        isLeft ? {} : {justifyContent: 'flex-end'},
      ]}>
      <View style={[isLeft ? styles.containerLeft : styles.containerRight, {}]}>
        <Text style={[styles.text, {maxWidth: widthOut}]}>{text}</Text>
      </View>
      <View style={isLeft ? styles.cornerLeft : styles.cornerRight}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRight: {
    elevation: 1,
    borderRadius: 15,
    borderTopRightRadius: 0,
    backgroundColor: '#E9F8DF',
    padding: 10,
    marginRight: 14,
  },
  containerLeft: {
    elevation: 1,

    borderRadius: 15,
    borderTopLeftRadius: 0,
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 14,
  },
  cornerRight: {
    right: 0,
    elevation: 1,
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderRightWidth: 15,
    borderTopWidth: 20,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightColor: 'transparent',
    shadowColor: 'transparent',
    borderTopColor: '#E9F8DF',
  },
  cornerLeft: {
    transform: [{rotateZ: '180deg'}, {rotateX: '180deg'}],
    left: 0,
    elevation: 1,
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderRightWidth: 15,
    borderTopWidth: 20,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    shadowColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
});
export default ChatBubble;
