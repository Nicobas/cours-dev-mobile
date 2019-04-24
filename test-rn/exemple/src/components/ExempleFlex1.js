import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class ExempleFlex1 extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <View style={{backgroundColor: 'green', width: 100, height: 100}}>
                    </View>
                    <View style={{backgroundColor: 'red', width: 100, height: 100}}>
                    </View>
                    <View style={{backgroundColor: 'blue', width: 100, height: 100}}>
                    </View>
                </View>
            <View style={{flex: 1, backgroundColor: 'red'}}>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
