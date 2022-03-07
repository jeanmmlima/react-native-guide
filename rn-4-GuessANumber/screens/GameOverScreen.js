import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText'
import colors from '../constants/colors';

import defaultStyle from '../constants/default-style';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={defaultStyle.title}>The Game is Over!</Text>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={require('../assets/img/success.png')}
                //source={{uri: 'https://mocah.org/thumbs/5420664-mountain-snow-ice-scenic-frost-snowy-outdoor-winter-cold-slope-top-wilderness-scenery-landscape-freeze-nature-peak-rock-mountain-top-cloud-png-images.jpg'}} 

                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}> Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
                
                <Button title="NEW GAME" onPress={props.onRestart} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    resultText:{
        textAlign: 'center',
        fontSize: 20,
    },
    highlight: {
        color: colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 30
    }
});

export default GameOverScreen;