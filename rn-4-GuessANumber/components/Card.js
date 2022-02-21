import React from "react";
import { View,StyleSheet } from "react-native";

const Card = props => {
    /**
     * ...styles.card vai trazer todas as proriedades definidas
     * ...props.style vai trazer outras propriedades que serão integradas ao estilo
     * inclusive SOBREESCREVENDO proproedades de styles.card
     *  */
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card:{
        //shadow properties só funcionanm no iOS! Para android usar o ELEVATION (material design)
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10
    }

});

export default Card;