import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid data")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Error", "Invalid data")}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Error", "Invalid data", [
            { text: "Cancel", onPress: () => console.log("Cancel") },
            { text: "Reminder", onPress: () => console.log("Reminder") },
            { text: "OK", onPress: () => console.log("OK") },
          ])
        }
      />
      <StatusBar style="default" />
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
