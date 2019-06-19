import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class BlueScreen extends React.Component {

  goToBlueScreen = () => {
    this.props.navigation.push('BlueScreen', )
  };

  goBack = () => {
    this.props.navigation.goBack()
  };

  goToRoot = () => {
    this.props.navigation.popToTop()
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
            onPress={() => this.goToBlueScreen()}
            style={styles.touchable}
        >
          <Text style={styles.text}>Go to BlueScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => this.goBack()}
            style={styles.touchable}
        >
          <Text style={styles.text}>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => this.goToRoot()}
            style={styles.touchable}
        >
          <Text style={styles.text}>Back to root</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  touchable: {
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  text: {
    color: 'black',
    fontSize: 20
  }
});
