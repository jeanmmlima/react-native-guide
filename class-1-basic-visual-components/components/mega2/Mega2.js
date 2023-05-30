import React, { Component, useState } from "react"
import MegaNumero from "../mega/MegaNumero"
import estilo from "../estilo"
import { View, Text, TextInput, Button } from 'react-native'


const Mega2 = props => {

    const [numeros, setNumeros] = useState([]);
    const [qtdNumeros, setQtdNumeros] = useState(props.qtdNumeros);


    const alterarQtdeNumero = (qtde) => {
        setQtdNumeros(qtde);
    }

    const gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? gerarNumeroNaoContido(nums) : novo
    }

    const gerarVetor = (numero) => {
        const vetor = [];
        for (let i = 0; i < numero; i++) {
          vetor.push(i);
        }
        return vetor;
      };

    const gerarNumeros = () => {
        const numerosMega = gerarVetor(qtdNumeros)
            .fill()
            .reduce(n => [...n, gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b) 
        setNumeros(numerosMega)
    }

    const exibirNumeros = () => {
        const nums = numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }
    return (
        <View style={{
            marginTop: 20,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={estilo.txtG}>
                Gerador de Mega-Sena
            </Text>
            <TextInput
                keyboardType={'numeric'}
                style={estilo.textInput}
                value={qtdNumeros}
                onChangeText={alterarQtdeNumero}
            />
            <Button
                title='Gerar'
                onPress={gerarNumeros}
            />
            <View style={{
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}>
                {exibirNumeros()}
            </View>
        </View>
    );



}

export default Mega2;