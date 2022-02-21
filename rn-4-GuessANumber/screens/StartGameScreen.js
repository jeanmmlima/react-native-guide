/**
 * Layout padrão de componentes no react
 * 1. importações
 * 2. definição do componente
 * 3. estilos e personalização
 * 4. exportação do componente 
 */

import React from "react";
import {View, StyleSheet, Text, TextInput, Button} from 'react-native'
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = props => {

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input styles={styles.input} blurOnSubmit autoCapitalize='none' 
                autoCorrect={false} keyboardType="number-pad" maxLength={2} />
                <View style={styles.btnContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={() => {}} color={colors.accent} /></View>
                    <View style={styles.button}><Button title="Confirm" onPress={() => {}} color={colors.primary} /></View>
                </View>
            </Card>

        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems:'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    btnContainer:{
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen;