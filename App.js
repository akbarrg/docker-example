import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Toast from 'react-native-simple-toast';

export default class App extends React.Component {

  on() {
    Toast.show('DOCKER IS AMAZIIIIING!!!');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.on()}>Open up App.js to start working on your app yeay!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
