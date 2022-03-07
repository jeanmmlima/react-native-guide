import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

import defaultStyle from "../constants/default-style";


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randNumber;
    }
}

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );

    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    /** 
     * useEffet tem uma função que é executada após cada ciclo de renderização para esse componente!
     * Toda vez que é renderizado, a função dentro de useEffect é executada. DEPOIS da renderização
     * Será usada para avaliar o resultado do jogo
     * 
     * Primeiro argumento é uma função 
     * Segundo argumento: é um vetor de dependencias da função passada, no qual você especifica
     * qualquer valor proviniente de fora da função
     * Nesse exemplo: onGameOver e userChoice que vem de props
     * 
     * Effect só vai ser executada se uma das dependencias for alterada!!!
     * */
    /**
     * Concentrando as dependencias de props necessárias ao effect
     * assim, o effect só será executado quando UMA dessas dependencias for alterada
     * Passado o props direto, iria ser executado para qualquer mudança em props
     */
    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(rounds);
        }
    }, [currentGuess,userChoice,onGameOver])

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < props.userChoice) ||
         (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert("Don\'t lie!", 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
            return;
        } else {
            if(direction === 'lower'){
                currentHigh.current = currentGuess;
                
            } else {
                currentLow.current = currentGuess;
            }
            const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current, currentGuess);
            setCurrentGuess(nextNumber);
            setRounds(curRounds => curRounds + 1);
        }
    }

    return (
        <View style={styles.screen}>
            <Text style={defaultStyle.title}>Opponent's guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')} />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    );


};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;