import React from 'react';
import {View, StyleSheet, VirtualizedList, StatusBar} from 'react-native';
import ChatListComponent from '../components/ChatListComponent';
import {FloatingAction} from 'react-native-floating-action';

const tempImage = '../../asset/user_image1.png';

const userList = [
  {
    id: 1,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',

    onPress: null,
  },
  {
    id: 2,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 3,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 4,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 5,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 6,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 7,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 8,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 9,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 10,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 11,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 12,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 13,
    image: require(tempImage),
    subtitle: 'Hey There! I am using this App.',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
  },
];

const getItem = (_data, index) => userList[index];

const getItemCount = _data => userList.length;
function MessageListScreen(props) {
  return (
    <View style={styles.container}>
      <VirtualizedList
        initialNumToRender={10}
        renderItem={({item, index}) => (
          <ChatListComponent
            image={item.image}
            onPress={item.onPress}
            subtitle={item.subtitle}
            time={item.time}
            title={item.title}
            unreadMessages={item.unreadMessages}
          />
        )}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});
export default MessageListScreen;
