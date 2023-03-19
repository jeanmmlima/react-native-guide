import { Camera, CameraType, FlashMode, WhiteBalance } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, FlatList,SafeAreaView } from 'react-native';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(CameraType.back)
  const [flash, setFlash] = useState(FlashMode.off)
  const [foto, setFoto] = useState(null)
  const [fotos, setFotos] = useState([])

  let camera

  async function requestPermission() {
    const { status } = await Camera.requestCameraPermissionsAsync()
    setHasPermission(status === 'granted')
  }

  async function flipCamera() {
    if (type === CameraType.back) {
      setType(CameraType.front)
    } else {
      setType(CameraType.back)
    }
  }

  async function toogleFlash() {
    if (flash === FlashMode.off) {
      setFlash(FlashMode.on)
    } else {
      setFlash(FlashMode.off)
    }
  }

  async function takePicture(){
    if (!camera) return
    const photo = await camera.takePictureAsync()
    setFoto(photo)
    pic = {id: Math.random().toString(), ph: photo}
    setFotos([...fotos, pic])
  }

  useEffect(() => {
    requestPermission()
  }, [])

  if (hasPermission == null) {
    return <View></View>
  }

  if (hasPermission === false) {
    return <View><Text>Não foi possível acessar a câmera</Text></View>
  }

  return (
    
    <View style={styles.container}>
      <Camera ref={ref => camera = ref} style={styles.camera} type={type} flashMode={flash}>
      <Button title="Alternar"  onPress={() => { flipCamera() }}></Button>

      <TouchableOpacity title="Alternar" style={styles.botao} onPress={() => { flipCamera()  }}>
      <View style={styles.customButtom}>
            <Text  style={styles.texto}>Flip Camera</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity title="Flash" style={styles.botao} onPress={() => { toogleFlash()  }}>
      <View style={styles.customButtom}>
            <Text  style={styles.texto}>Flash</Text>
          </View>
      </TouchableOpacity>
      
      <TouchableOpacity title="Tira Foto" style={styles.botaoTakePhoto} onPress={() => { takePicture() }}>
      <View style={styles.customButtom}>
            <Text  style={styles.texto}>Tirar Foto</Text>
          </View>
      </TouchableOpacity>

      </Camera>
     
      <Image style={{ width: 100, height: 100 }} source={{ uri: foto && foto.uri }}></Image>
      <View style={styles.listaFotos}>
      <FlatList
      horizontal
        data={fotos} 
        keyExtractor={(item, index) => item.id}
        renderItem={task => <Image style={{ width: 100, height: 100 }} source={{ uri: task.item.ph && task.item.ph.uri }}></Image>}
      />
      </View>
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listaFotos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 4,
    width: 400,
    height: 400
  },
  botaoTakePhoto: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  botao: {
    marginTop: 30,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'start',
  },
  texto: {
    color: 'white',
    
  },
  customButtom: {
    backgroundColor: 'black',
    padding: 2,
  }
});
