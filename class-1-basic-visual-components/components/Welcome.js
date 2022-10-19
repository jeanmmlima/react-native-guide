import {Text, View,StyleSheet } from 'react-native';
const WelcomeComponent = () => {
    return (
      <View style={style.screen} >
        <Text>Seja bem-vindo! Conteúdo do componente!</Text>
  
      </View>
    );
  }
  const style = StyleSheet.create({

    screen: {
      paddingTop: 50,
      flexDirection: 'column',
      width: '100%',
      height: 300,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  })
  export default WelcomeComponent;