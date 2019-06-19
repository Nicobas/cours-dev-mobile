import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight} from 'react-native';

export default class RedScreen extends React.Component {

  goToBlueScreen = () => {
    this.props.navigation.push('BlueScreen')
  };

  goToGreenScreen = (text) => {
    this.props.navigation.push('GreenScreen', {text: text})
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
            onPress={() => this.goToBlueScreen()}
            style={styles.blueTouchable}
        >
          <Text style={styles.text}>Go to BlueScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => this.goToGreenScreen(1)}
            style={styles.greenTouchable}
        >
          <Text style={styles.text}>Go to GreenScreen (1)</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => this.goToGreenScreen(2)}
            style={styles.greenTouchable}
        >
          <Text style={styles.text}>Go to GreenScreen (2)</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => this.goToGreenScreen(3)}
            style={styles.greenTouchable}
        >
          <Text style={styles.text}>Go to GreenScreen (3)</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  blueTouchable: {
    width: 300,
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  greenTouchable: {
    width: 300,
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 20
  }
});
