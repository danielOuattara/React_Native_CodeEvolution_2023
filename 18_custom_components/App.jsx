import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert, Button } from "react-native";
import Greet from "./components/Greet";

export default function App() {
  return (
    <View style={styles.container}>
      <Greet name={"John Doe"} />
      <Greet name={"Anna Starlet"} />
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
