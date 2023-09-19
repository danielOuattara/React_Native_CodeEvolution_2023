import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Press Me"
        onPress={() => console.log("Button pressed")}
        color={"green"}
        disabled
      />
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
