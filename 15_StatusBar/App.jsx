import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Modal, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="green" barStyle="default" hidden />
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
