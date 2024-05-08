import React, {useRef, useState} from 'react';
import {
  Animated,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

import {SceneMap, TabView} from 'react-native-tab-view';

import MessageListScreen from './MessageListScreen';
import colors from '../../config/colors';
import UpdatesListScreen from './UpdatesListScreen';

const ChatScreenRoute = () => <MessageListScreen />;
const StatusUpdateScreenRoute = () => <UpdatesListScreen />;
const CallLogScreenRoute = () => (
  <View style={[styles.container, {backgroundColor: 'red'}]} />
);

const actions = [
  {
    text: 'Accessibility',
    icon: require('../../asset/user_image1.png'),
    name: 'bt_accessibility',
    position: 2,
  },
  {
    text: 'Language',
    icon: require('../../asset/user_image1.png'),
    name: 'bt_language',
    position: 1,
  },
  {
    text: 'Location',
    icon: require('../../asset/user_image1.png'),
    name: 'bt_room',
    position: 3,
  },
  {
    text: 'Video',
    icon: require('../../asset/user_image1.png'),
    name: 'bt_videocam',
    position: 4,
  },
];
_renderScene = SceneMap({
  first: ChatScreenRoute,
  second: StatusUpdateScreenRoute,
  third: CallLogScreenRoute,
});

function CustomTabBarWithAnimation(props) {
  const {width} = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const routes = [
    {key: 'first', title: 'Chat'},
    {key: 'second', title: 'Updates'},
    {key: 'third', title: 'Calls'},
  ];
  const moveX = useRef(new Animated.Value(0)).current;
  _handleIndexChange = index => setIndex(index);
  const eachIndicatorWidth = width / 3 - 30;
  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => {
      return i;
    });

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, currentIndex) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === currentIndex ? 1 : 0.5,
            ),
          });
          const newInput = inputRange.map(i => {
            return i + 1;
          });
          const indexFormer = props.position.interpolate({
            inputRange: inputRange, //(-1  -- 0)(0 -- 1)(1 -- 2)
            outputRange: newInput,
          });

          const isVisible = index == currentIndex;
          const moveXCopy = props.position.interpolate({
            inputRange,
            //[0, eachIndicatorWidth / 11, eachIndicatorWidth / 11],
            outputRange: inputRange.map(inputIndex => {
              console.log('newInput', newInput);
              if (currentIndex === 0) {
                return inputIndex === currentIndex ? 0 : eachIndicatorWidth;
              } else if (currentIndex === inputRange[inputRange.length - 1]) {
                return inputIndex === currentIndex ? 0 : -eachIndicatorWidth;
              } else {
                // if (index < currentIndex) {
                //   return inputIndex === currentIndex ? 0 : eachIndicatorWidth;
                // }
                // // Check if the next index is smaller than the current index
                // else if (index > currentIndex) {
                // if(){

                //   return inputIndex === currentIndex ? 0 : -eachIndicatorWidth;
                // }
                // else{

                return inputIndex === currentIndex ? 0 : eachIndicatorWidth;
                // }
                // } else {
                //   return 0;
                // }
              }
            }),
          });

          return (
            <TouchableOpacity
              key={currentIndex.toString()}
              style={styles.tabItem}
              onPress={() => {
                setIndex(currentIndex);
              }}>
              <Animated.Text
                style={[{opacity}, {color: '#FFF', fontWeight: 'bold'}]}>
                {route.title}
              </Animated.Text>

              {isVisible == true && (
                <Animated.View
                  style={{
                    transform: [{translateX: moveXCopy}, {translateY: 0}],
                    height: 10,
                    width: eachIndicatorWidth,
                    backgroundColor: '#fff',
                  }}></Animated.View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <>
      <TabView
        navigationState={{index, routes}}
        renderScene={_renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={_handleIndexChange}
        initialLayout={{width: width}}
      />
      <FloatingAction
        showBackground={false}
        onPressBackdrop={() => console.log()}
        floatingIcon={<View></View>}
        animated={true}
        onPressMain={() => console.log()}
        //actions={actions}
        // onPressItem={name => {
        //   console.log(`selected button: ${name}`);
        // }}
      />
    </>
  );
}
export default CustomTabBarWithAnimation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.whatsappGreen,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});
