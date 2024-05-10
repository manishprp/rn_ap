import React, {useContext, createContext} from 'react';
import {
  View,
  StyleSheet,
  VirtualizedList,
  StatusBar,
  FlatList,
} from 'react-native';
import ChatListComponent from '../components/ChatListComponent';
import {FloatingAction} from 'react-native-floating-action';
import StatusUpdateRowItem from '../components/StatusUpdateRowItem';

const tempImage = '../../asset/user_image1.png';

const userList = [
  {
    id: 1,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    status: 5,
    seen: 0,
    onPress: null,
  },
  {
    id: 2,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    status: 5,
    time: '11:40 AM',
    seen: 1,
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 3,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    status: 5,
    seen: 2,
    unreadMessages: 4,
  },
  {
    id: 4,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    status: 3,
    seen: 0,
    unreadMessages: 4,
  },
  {
    id: 5,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    status: 2,
    seen: 6,
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 6,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    status: 9,
    seen: 0,
    onPress: null,
    unreadMessages: 4,
  },
  {
    id: 7,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    status: 15,
    onPress: null,
    unreadMessages: 4,
    seen: 5,
  },
  {
    id: 8,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    status: 3,
    unreadMessages: 4,
    seen: 0,
  },
  {
    id: 9,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    status: 4,
    seen: 0,
    unreadMessages: 4,
  },
  {
    id: 10,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    status: 0,
    seen: 0,
    unreadMessages: 4,
  },
  {
    id: 11,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    seen: 0,
    status: 5,
    unreadMessages: 4,
  },
  {
    id: 12,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    unreadMessages: 4,
    seen: 0,
    status: 7,
  },
  {
    id: 13,
    image: require(tempImage),
    subtitle: '12 : 43 AM',
    title: 'Anthony Gonsalves',
    time: '11:40 AM',
    onPress: null,
    seen: 0,
    status: 1,
    unreadMessages: 4,
  },
];

const getItemCount = _data => userList.length;

function UpdatesListScreen(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        renderItem={({item, index}) => (
          <StatusUpdateRowItem
            image={item.image}
            onPress={item.onPress}
            subtitle={item.subtitle}
            title={item.title}
            seen={item.seen}
            status={item.status}
          />
        )}
        keyExtractor={item => item.id}
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
export default UpdatesListScreen;
