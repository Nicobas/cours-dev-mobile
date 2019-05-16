import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default class ValidationIcon extends React.Component { // tous les composants reaft-native doivent hériter de la classe React.Component

    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(nextProps) {

        // this.props est un objet qui contient les donnée que l'on passe au composant dans le vue parente
        // si sa valeur change dans le parent, il change aussi dans le composant et on peut l'utiliser comme les state dans les vies

        // cette fonction permet de faire un traitement à chaque fois qu'un props change

        if (this.props.isValid !== nextProps.isValid) {
            console.log('Le isValid passe à ' + nextProps.isValid)
        }
    }

    render() {

        return (
            <Image
                style={{
                    width: 30,
                    height: 30
                }}
                source={this.props.isValid ? require('../assets/images/coche_verte.png') : require('../assets/images/croix_rouge.png')} // images importée depuis un fichier local, dès que le props change l'image aussi
            />
        )
    }
}
