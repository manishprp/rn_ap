import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import AppBarApp from './app/components/AppBarApp';
import TappableImage from './app/components/TappableImage';
import ChatBubble from './app/components/ChatBubble';
const messageData = [
  {
    id: 1,
    message: `Hey there Thi sis a long message and i am stll writ
      ing in it i do 
      not know why but yes iguess
       i want it to be a long text maybe for that.`,
    isLeft: true,
  },
  {
    id: 2,
    message: `Hey there Thi sis a long message and i am stll writ
      ins
       i want it to be a long text maybe for that.`,
    isLeft: false,
  },
  {
    id: 3,
    message: `Hey there Thi sis a long message and i am stll writ
      ing in it i do .`,
    isLeft: true,
  },
  {
    id: 4,
    message: `Hey there Thi sis a long message and i am stll writ
      ing in it i do 
      not know why but yes iguess
       i want it to be a long text maybe for that.`,
    isLeft: false,
  },
  {
    id: 5,
    message: `Hey there Thi sis a long message and i am stll writ
      ins
       i want it to be a long text maybe for that.`,
    isLeft: true,
  },
  {
    id: 6,
    message: `Hey there Thi sis a long message and i am stll writ
      ing in it i do .`,
    isLeft: true,
  },
  {
    id: 7,
    message: `Hey there Thi sis a long message and i am stll writ
      ing in it i do .`,
    isLeft: true,
  },
  {
    id: 8,
    message: `Hey there Thi sis a long message and i am stll writ
      ing in it i do .`,
    isLeft: false,
  },
  {
    id: 9,
    message: `Hey there Thi sis a long message and i am stll writ
      ing in it i do .`,
    isLeft: false,
  },
];
function App(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require('./asset/bg_img.jpg')}>
      <AppBarApp />
      <FlatList
        style={styles.messageList}
        data={messageData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ChatBubble text={item.message} isLeft={item.isLeft} />
        )}
      />

      <View style={styles.chatBox}>
        <TappableImage
          style={styles.icon}
          onPress={console.log('Emojis')}
          source={require('./asset/smily_dark.png')}
        />
        <TextInput
          editable
          multiline
          style={styles.input}
          placeholder="message"></TextInput>
        <TappableImage
          style={styles.icon}
          source={require('./asset/upload_file.png')}
        />
        <View
          style={{
            width: 20,
          }}
        />
        <TappableImage
          style={styles.icon}
          source={require('./asset/camera_dark.png')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  chatBox: {
    maxHeight: 150,
    alignItems: 'center',
    backgroundColor: 'white',
    bottom: 10,
    borderRadius: 25,
    elevation: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 8,
  },
  container: {
    flex: 1,
  },
  icon: {
    height: 25,
    width: 25,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
  messages: {
    flex: 1,
  },
  messageList: {
    marginBottom: 10,
    flex: 1,
  },
});
export default App;
