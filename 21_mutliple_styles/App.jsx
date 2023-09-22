import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
      <View
        // style={[styles.lightBlueBox, styles.box]} // OR
        style={{ ...styles.lightBlueBox, ...styles.box }}
      >
        <Text>Light blue box</Text>
      </View>
      <View style={[styles.lightGreenBox, styles.box]}>
        <Text>Light green box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 40,
    borderWidth: 1,
    borderColor: "black",
  },
  title: {
    fontSize: 20,
  },

  box: {
    width: 100,
    height: 100,
    padding: 10,
  },

  lightBlueBox: {
    backgroundColor: "lightblue",
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
  },
});
