import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useState } from "react";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="green" barStyle="default" />
      <ActivityIndicator />
      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"large"} color={"blue"} />
      <ActivityIndicator size={"large"} color={"blue"} animating={false} />
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
