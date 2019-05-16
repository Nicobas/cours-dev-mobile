import React from 'react';
import {TextInput, StyleSheet, Text, View, ScrollView, Platform, TouchableOpacity, Image, Alert} from 'react-native';
import * as EmailValidator from 'email-validator';

import ValidationIcon from "./ValidationIcon"; // n'oubliez pas d'importer tous les composants que vous utilisez !

export default class App extends React.Component {

    constructor(props) {
        super(props);

        // on initialise le state (objet qui rend les vues dynamiques)
        this.state = {
            text: '',
            isVisible: true,
            isValid: false,
        }
    }

    onChangeText(value) {
        // fonction appelée à chaque fois que le texte change

        this.setState({
            text: value, // on met à jour le texte en state
            isValid: EmailValidator.validate(value) // on verifie si la valeur est bien un email (à l'aide d'un module npm)
        })
    }

    onTouchablePress() {
        this.setState({
            isVisible: !this.state.isVisible // à chaque fois que l'on clique sur le bouton Cacher/Afficher on inverse la valeur pour gérer l'affichage du block
        })
    }

    renderHideButton() {
        return (
            <TouchableOpacity
                style={{
                    marginHorizontal: 50,
                    marginVertical: 10
                }}
                onPress={() => this.onTouchablePress()} // la props onPress du TouchableOpacity est la fonction appelée quand on clique dessus
            >
                <Text
                    style={{
                        color: 'red',
                        fontWeight: 'bold',
                        fontSize: 30,
                        borderColor: 'red',
                        borderWidth: 2,
                        textAlign: 'center',
                    }}
                >{this.state.isVisible ? 'Cacher' : 'Afficher'}</Text>
            </TouchableOpacity>
        )
    }

    renderScrollView() {
        return (
            <ScrollView // la ScrollView fonctionne comme une View fauf que si le contenu dépasse sa taille il est scrollable
                style={styles.container}
            >
                <View style={{
                    alignItems: 'center',
                    marginVertical: 10
                }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 20
                        }}
                    >
                        {"Bonjour " + this.state.text /* on concatène Bonjour avec la valeur de l'input*/}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TextInput
                            placeholder={'Email ...'}
                            style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(value) => this.onChangeText(value)}
                            value={this.state.text}
                        />
                        <ValidationIcon // on utilise un composants que l'on à créer nous-même
                            isValid={this.state.isValid} // on lui passe en props un booléen
                        />
                    </View>
                </View>
                <View style={{
                    marginVertical: 10,
                    marginHorizontal: 20
                }}>
                    <Text>{"Le device tourne sous "}
                        <Text // vous pouvez mettre un Text dans un Text pour styliser une partie
                            onPress={() => Alert.alert("Système d'exploitation", Platform.OS)} // Un components Text peur prendre un props onPress qui fonctionne comme les Touchables
                            style={{fontWeight: 'bold', color: 'black'}}
                        >
                            {Platform.OS}
                        </Text>
                    </Text>
                </View>
                <View style={{
                    marginVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image
                        style={{
                            width: 300,
                            height: 200,
                            resizeMode: 'contain'
                        }}
                        source={{uri: 'https://cdn-images-1.medium.com/max/1200/1*ub1DguhAtkCLvhUGuVGr6w.png'}} // image importée depuis internet
                    />
                </View>
                <View style={{flex: 1, height: 600}}>

                    <View style={{
                        flex: 1,
                        backgroundColor: 'red',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}>
                        <View style={styles.blackSquare}/>
                        <View style={styles.blackSquare}/>
                        <View style={styles.blackSquare}/>
                    </View>
                    <View style={{flex: 2, flexDirection: 'row'}}>
                        <View style={{flex: 1, backgroundColor: 'blue'}}>

                        </View>
                        <View style={{flex: 1, backgroundColor: 'green'}}>

                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

    render() {
        // j'ai décidé de découper le render en plusieurs fonctions pour rendre le code plus claire
        return (
            <View>
                {
                    this.renderHideButton()
                }
                {
                    !this.state.isVisible ? null : ( // si le isVisible vaut false on affiche rien sinon on affiche le contenu de la fonction renderScrollView
                        this.renderScrollView()
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({ // normalement tout les styles doivent se trouver dans une feuille de style, il ne sont dans les renders que pendant les développements
    container: {},
    blackSquare: {
        backgroundColor: 'black',
        width: 50,
        height: 50
    }
});
