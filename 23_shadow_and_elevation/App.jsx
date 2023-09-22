import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
      <View
        // style={{ ...styles.lightBlueBox, ...styles.box }} // OR
        style={[
          styles.lightBlueBox,
          styles.box,
          styles.boxShadow,
          styles.androidShadow,
        ]}
      >
        <Text
          style={{ borderRadius: 5, backgroundColor: "orange", padding: 2 }}
        >
          Light blue box
        </Text>
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
    width: 250,
    height: 250,
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "purple",
  },
  lightBlueBox: {
    backgroundColor: "lightblue",
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#3f3f3f",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },

  androidShadow: {
    elevation: 10,
  },
});
