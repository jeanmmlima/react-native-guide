import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //<FlexDirectio />
    //<LayoutDirection />
    //<AlignItens />
    <Wrap_AlignContent />
);
}

function FlexDirectio(){
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
    <View style={styles.container}>
      <View style={[styles.box, styles.cor1]}><Text style={{ color: 'white', fontSize: 30 }}>1</Text></View>
      <View style={[styles.box, styles.cor2]}><Text style={{ color: 'white', fontSize: 30 }}>2</Text></View>
      <View style={[styles.box, styles.cor3]}><Text style={{ color: 'white', fontSize: 30 }}>3</Text></View>
    </View>
    </SafeAreaView>  
);
}

function LayoutDirection(){
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
    <View style={stylesDirectionLayout.container}>
      <View style={[stylesDirectionLayout.box, stylesDirectionLayout.cor1]}><Text style={{ color: 'white', fontSize: 30 }}>1</Text></View>
      <View style={[stylesDirectionLayout.box, stylesDirectionLayout.cor2]}><Text style={{ color: 'white', fontSize: 30 }}>2</Text></View>
      <View style={[stylesDirectionLayout.box, stylesDirectionLayout.cor3]}><Text style={{ color: 'white', fontSize: 30 }}>3</Text></View>
    </View>
    </SafeAreaView>  
);
}

function AlignItens(){
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
    <View style={stylesAlignItens.container}>
      <View style={[stylesAlignItens.box, stylesAlignItens.cor1]}><Text style={{ color: 'white', fontSize: 30 }}>1</Text></View>
      <View style={[stylesAlignItens.box, stylesAlignItens.cor2]}><Text style={{ color: 'white', fontSize: 30 }}>2</Text></View>
      <View style={[stylesAlignItens.box, stylesAlignItens.cor3]}><Text style={{ color: 'white', fontSize: 30 }}>3</Text></View>
    </View>
    </SafeAreaView>  
);
}

function Wrap_AlignContent(){
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
    <View style={stylesWrap_AlignContents.container}>
    <View style={[stylesWrap_AlignContents.box, stylesWrap_AlignContents.cor1]}><Text style={{ color: 'white', fontSize: 30 }}>1</Text></View>
      <View style={[stylesWrap_AlignContents.box, stylesWrap_AlignContents.cor2]}><Text style={{ color: 'white', fontSize: 30 }}>2</Text></View>
      <View style={[stylesWrap_AlignContents.box, stylesWrap_AlignContents.cor3]}><Text style={{ color: 'white', fontSize: 30 }}>3</Text></View>
      <View style={[stylesWrap_AlignContents.box, stylesWrap_AlignContents.cor1]}><Text style={{ color: 'white', fontSize: 30 }}>1</Text></View>
      <View style={[stylesWrap_AlignContents.box, stylesWrap_AlignContents.cor2]}><Text style={{ color: 'white', fontSize: 30 }}>2</Text></View>
      <View style={[stylesWrap_AlignContents.box, stylesWrap_AlignContents.cor3]}><Text style={{ color: 'white', fontSize: 30 }}>3</Text></View>
      <View style={[stylesWrap_AlignContents.box, stylesWrap_AlignContents.cor1]}><Text style={{ color: 'white', fontSize: 30 }}>1</Text></View>
      <View style={[stylesWrap_AlignContents.box, stylesWrap_AlignContents.cor2]}><Text style={{ color: 'white', fontSize: 30 }}>2</Text></View>
      <View style={[stylesWrap_AlignContents.box, stylesWrap_AlignContents.cor3]}><Text style={{ color: 'white', fontSize: 30 }}>3</Text></View>
    </View>
    </SafeAreaView>  
);
}

const styles = StyleSheet.create({
  AndroidSafeArea:{
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  container: {
    flex: 1,
    flexDirection: 'row-reverse'
  },
  box: {
    width: 100,
    height: 100
  },
  cor1: {
    backgroundColor: '#00F'
  },
  cor2: {
    backgroundColor: '#05F'
  },
  cor3: {
    backgroundColor: '#0AF'
  },
  
});

const stylesDirectionLayout = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    direction: 'rtl'
  },
  box: {
    width: 100,
    height: 100
  },
  cor1: {
    backgroundColor: '#00F'
  },
  cor2: {
    backgroundColor: '#05F'
  },
  cor3: {
    backgroundColor: '#0AF'
  },

});

const stylesAlignItens = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    direction: 'ltr',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100
  },
  cor1: {
    backgroundColor: '#00F'
  },
  cor2: {
    backgroundColor: '#05F'
  },
  cor3: {
    backgroundColor: '#0AF'
  },

});

const stylesWrap_AlignContents = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    direction: 'ltr',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    alignContent: 'space-around'

  },
  box: {
    width: 60,
    height: 60
  },
  cor1: {
    backgroundColor: '#00F'
  },
  cor2: {
    backgroundColor: '#05F'
  },
  cor3: {
    backgroundColor: '#0AF'
  },

});
