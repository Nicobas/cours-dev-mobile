import React from 'react';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';

const axios = require('axios');

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        };

        this.getData();
    }

    async getData() {

        const response = await axios({
            method: 'get',
            url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a',
        });

        console.log(response.data.drinks);

        this.setState({
            data: response.data.drinks
        })
    }

    renderItem({item, index}) {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text
                    style={{color: 'black', fontSize: 20}}
                >
                    {item.strDrink}
                </Text>
                <Image
                    style={{width: 100, height: 100}}
                    source={{uri: item.strDrinkThumb}}
                />
            </View>
        )
    }

    render() {
        return !this.state.data ? null : (
            <View style={styles.container}>
                {/*{*/}
                {/*  this.state.data.map((item, i) => {*/}
                {/*    return this.renderItem(item, i)*/}
                {/*  })*/}
                {/*}*/}
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
});
