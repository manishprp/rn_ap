import React, {useState, useContext, createContext} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import CircularStatusImage from './CircularStatusImage';
import colors from '../../config/colors';
import StatusesContext from './StatusesContext';

const SeenContext = createContext();
function StatusUpdateRowItem({
  image,
  subtitle,
  title,
  time,
  onPress,
  seen = 0,
  status = 1,
}) {
  const [seenIn, setSeenIn] = useState(status);
  return (
    <StatusesContext.Provider value={{statuses: status}}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.container}>
          {/* <CircularStatusImage
            image={require('../../asset/user_image1.png')}
            radius={30}
            seen={seen}
            statusNumber={status}
          /> */}
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
          </View>
        </View>
      </TouchableNativeFeedback>
    </StatusesContext.Provider>
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
export default StatusUpdateRowItem;
