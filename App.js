import React, {useState} from 'react';
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Text,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar, TabBarItem} from 'react-native-tab-view';
import colors from './config/colors';

const FirstRoute = () => (
  <View style={[styles.container, {backgroundColor: '#ff4081'}]} />
);
const SecondRoute = () => (
  <View style={[styles.container, {backgroundColor: '#673ab7'}]} />
);
const ThirdRoute = () => (
  <View style={[styles.container, {backgroundColor: '#e2e2e2'}]} />
);

function App(props) {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
  ]);

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  _handleIndexChange = index => setIndex(index);

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => {
      return i;
    });

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          // const width = props.position.interpolate({
          //   inputRange,
          //   outputRange: inputRange.map(inputIndex =>
          //     inputIndex === i ? '100%' : '0%',
          //   ),
          // });

          return (
            <TouchableOpacity
              key={i.toString()}
              style={styles.tabItem}
              onPress={() => {
                setIndex(i);
              }}>
              <Animated.Text
                style={{
                  // opacity,
                  color: '#FFF',
                  fontWeight: i === index ? 'bold' : 'regular',
                  fontSize: 16,
                }}>
                {route.title}
              </Animated.Text>
              <View
                style={
                  i === index
                    ? {
                        height: 2,
                        width: '100%',
                        backgroundColor: 'white',
                      }
                    : {}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <>
      <StatusBar backgroundColor={colors.whatsappGreen} />
      <TabView
        tabBarPosition="top"
        navigationState={{index, routes}}
        renderScene={_renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={_handleIndexChange}
      />
    </>
  );
}

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
    paddingTop: 16,
  },
});
export default App;
