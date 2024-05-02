import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function UnreadMessagesComponent({unreadMessages}) {
  return (
    <>
      {unreadMessages && (
        <View style={styles.unreadMessagesContainer}>
          <Text numberOfLines={1} style={styles.unreadMessages}>
            {unreadMessages}
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  unreadMessages: {
    fontSize: 12,
    color: '#fff',
  },
  unreadMessagesContainer: {
    alignItems: 'center',
    backgroundColor: colors.whatsappGreen,
    borderRadius: 13,
    justifyContent: 'center',
    height: 25,
    width: 25,
  },
});
export default UnreadMessagesComponent;
