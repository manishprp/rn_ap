import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../config/colors';
import BackIconAndProfile from './BackIconAndProfile';
import TappableImage from './TappableImage';

const APPBAR_HEIGHT = 56;
function AppBarApp(props) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.whatsappGreen} />
      <View style={styles.appbar}>
        <BackIconAndProfile />
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Anthony Gonsalves</Text>
        </TouchableOpacity>
        <TappableImage
          style={styles.profilePhoto}
          source={require('../../asset/options.png')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appbar: {
    alignItems: 'center',
    backgroundColor: colors.whatsappGreen,
    elevation: 1,
    flexDirection: 'row',
    height: APPBAR_HEIGHT,
    width: '100%',
  },
  backIcon: {
    height: 20,
    width: 18,
  },
  container: {},
  navigateBackContainer: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    height: APPBAR_HEIGHT,
    justifyContent: 'center',
    padding: 10,
  },
  profilePhoto: {
    color: 'white',
    height: 22,
    width: 22,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
  },
  statusBar: {
    backgroundColor: colors.whatsappGreen,
  },
  titleContainer: {
    flex: 1,
  },
});
export default AppBarApp;
