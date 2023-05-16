import {Text, View,StyleSheet } from 'react-native';
const WelcomeComponent = () => {
    return (
      <View style={style.screen} >
        <Text>Seja bem-vindo! Conteúdo do componente 1!</Text>
  
      </View>
    );
  }
  const style = StyleSheet.create({

    screen: {
      paddingTop: 20,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  })
  export default WelcomeComponent;