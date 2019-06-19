import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class GreenScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state= {
      text: this.props.navigation.getParam('text')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 40
  }
});
