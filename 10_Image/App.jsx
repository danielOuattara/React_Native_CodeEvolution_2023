import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      {/* Local image */}
      {/* <Image source={logoImg} style={{ width: 300, height: 300 }} /> */}

      {/* remote image */}
      {/* <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      /> */}

      {/* background image */}
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 40,
  },
});
