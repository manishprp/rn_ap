import React from 'react';
import {View, StyleSheet} from 'react-native';
import StatusCounter from './app/components/StatusCounter';

function App(props) {
  return <StatusCounter count={100} />;
}

const styles = StyleSheet.create({
  container: {},
});
export default App;
