import React, {useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const TabBarIndicator = ({tabsWidth, position}) => {
  const tabWidth = tabsWidth / 3; // Assuming 3 tabs
  const translateX = position.interpolate({
    inputRange: [0, 1, 2], // Tab positions
    outputRange: [0, tabWidth, tabWidth * 2], // Indicator positions
  });

  return (
    <Animated.View
      style={[styles.indicator, {width: tabWidth, transform: [{translateX}]}]}
    />
  );
};

const TabViewExample = () => {
  const [index, setIndex] = useState(0);
  const [tabsWidth, setTabsWidth] = useState(0);
  const position = new Animated.Value(0); // Initialize animated position

  const renderScene = SceneMap({
    first: () => <View style={{flex: 1, backgroundColor: 'red'}} />,
    second: () => <View style={{flex: 1, backgroundColor: 'green'}} />,
    third: () => <View style={{flex: 1, backgroundColor: 'blue'}} />,
  });

  const handleIndexChange = newIndex => {
    setIndex(newIndex);
    Animated.spring(position, {
      toValue: newIndex,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{
          index,
          routes: [{key: 'first'}, {key: 'second'}, {key: 'third'}],
        }}
        renderScene={renderScene}
        onIndexChange={handleIndexChange}
        renderTabBar={props => (
          <View
            {...props}
            style={styles.tabBar}
            onLayout={event => setTabsWidth(event.nativeEvent.layout.width)}>
            <TouchableOpacity
              onPress={() => handleIndexChange(0)}
              style={[styles.tabItem, index === 0 && styles.activeTab]}>
              <Text>Tab 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleIndexChange(1)}
              style={[styles.tabItem, index === 1 && styles.activeTab]}>
              <Text>Tab 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleIndexChange(2)}
              style={[styles.tabItem, index === 2 && styles.activeTab]}>
              <Text>Tab 3</Text>
            </TouchableOpacity>
            <TabBarIndicator tabsWidth={tabsWidth} position={position} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: 'blue',
  },
});

export default TabViewExample;
