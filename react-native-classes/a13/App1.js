import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    // Quando a permissão de uso da camera ainda não foi concedida
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Você precisa permitir o uso da camera
        </Text>
        <Button onPress={requestPermission} title="Habilitar a permissao" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={"back"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 5,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    width: 400,
    height: 400,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
