import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
});

/* 
flexGrow: 0 // is the default value
*/
