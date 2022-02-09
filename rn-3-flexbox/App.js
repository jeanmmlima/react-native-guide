import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*
Flex Box - react native

Todos os componentes View do RN implementam FlexBox para estruturar seu layout.
Ajustando 

Padrão: alinha componentes em coluna
flexDirection: propriedade para mudar o alinhamento.
justifyContent: elementos são alinhados no eixo principal de direção (se o padrão for linha: esquerda para direita)
alignItems: elementos são alinhados no eixo transversal ao principal. Ex: (se o padrão for linha, vai alinhar na vertical)

Nas Views Filhas:

Propriedade flex: atribui a proporção/peso do tamanho do componente dentro do espaço útil disponível
*/

export default function App() {
  return (
    <View style={{
      padding: 50, 
      flexDirection:'row',
      width:'80%', 
      height:300,
      justifyContent:'space-around',
      alignItems:'stretch'}}>
      <View style={{backgroundColor: 'red',flex:1,justifyContent:'center', alignItems:'center'}}>
        1
      </View>
      <View style={{backgroundColor: 'blue',flex:2,justifyContent:'center', alignItems:'center'}}>
        2
      </View>
      <View style={{backgroundColor: 'green',flex:1,justifyContent:'center', alignItems:'center'}}>
        3
      </View>
    </View>
  );
}


