import { StyleSheet, View, Text, SafeAreaView, Platform } from "react-native";
import Button from "./components/Button/Button";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome !</Text>
          <Button title="press me" onPress={() => console.log(Platform.OS)} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    // --> Platform.OS = good for small changes
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    // --> Platform.select() is better for a group of multiple properties
    ...Platform.select({
      android: {
        backgroundColor: "lightgreen",
        fontSize: 20,
        fontStyle: "italic",
      },
      ios: {
        backgroundColor: "red",
        fontSize: 22,
      },
      default: {
        // other platforms, web for example
        backgroundColor: "blue",
        fontSize: 24,
      },
    }),
  },
});
