import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default class HelloWorldApp extends Component {

    constructor(props) {
        super(props);

        setTimeout(() => {
            SplashScreen.hide();
        }, 2000)
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Hello, world!</Text>
            </View>
        );
    }
}