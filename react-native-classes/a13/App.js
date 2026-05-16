import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState("back");
  const [foto, setFoto] = useState(null);
  const [fotos, setFotos] = useState([]);

  let camera;

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
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
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePicture() {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setFotos([...fotos, photo]);
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={(ref) => (camera = ref)}
      />
      <View style={styles.previewPic}>
        <ScrollView horizontal={true}>
          {fotos.map((foto, index) => (
            <Image
              key={index}
              style={styles.imgPreview}
              source={{ uri: foto && foto.uri }}
            ></Image>
          ))}
        </ScrollView>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => takePicture()}
        >
          <Text style={styles.text}>Tirar foto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={toggleCameraFacing}
        >
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
  preview: {
    width: 100,
    height: 100,
    marginTop: 12,
  },
  actions: {
    width: "100%",
    paddingVertical: 20,
    gap: 12,
  },
  buttonContainer: {
    backgroundColor: "blue",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  previewPic: {
    flex: 2,
    flexDirection: "row",
  },
  imgPreview: {
    margin: 1,
    width: 100,
    height: 100,
  },
});
