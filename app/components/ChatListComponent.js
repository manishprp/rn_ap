import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import colors from '../../config/colors';
import RoundedImage from './RoundedImage';
import UnreadMessagesComponent from './UnreadMessagesComponent';

function ChatListComponent({
  image,
  subtitle,
  title,
  time,
  onPress,
  unreadMessages,
}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <RoundedImage image={image} />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.subTitle}>
            {subtitle}
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <Text numberOfLines={1}>{time}</Text>
          <UnreadMessagesComponent unreadMessages={unreadMessages} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  subTitle: {
    color: colors.textColor,
    fontSize: 16,
    fontWeight: '400',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: '600',
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
});
export default ChatListComponent;
