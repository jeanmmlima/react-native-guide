import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(CameraType.back)
  const [foto, setFoto] = useState(null)

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

  async function takePicture(){
    if (!camera) return
    const photo = await camera.takePictureAsync()
    setFoto(photo)
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
      <Camera ref={ref => camera = ref} style={styles.camera} type={type}></Camera>
      <Button title="Alternar" onPress={() => { flipCamera() }}></Button>
      <Button title="Tira Foto" onPress={() => { takePicture() }}></Button>
      <Image style={{ width: 100, height: 100 }} source={{ uri: foto && foto.uri }}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: 400,
    height: 400
  }
});
