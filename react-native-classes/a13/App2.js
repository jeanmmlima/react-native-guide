import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState("back");

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

  function toggleCameraFacing() {
    if (facing === "back") {
      setFacing("front");
    } else {
      setFacing("back");
    }
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Virar a camera</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    position: "absolute",
    bottom: 64,
    flexDirection: "row",
    backgroundColor: "blue",
    width: "100%",
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
