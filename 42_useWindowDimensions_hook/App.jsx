import { StyleSheet, View, Text, useWindowDimensions } from "react-native";

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  console.log(windowWidth, windowHeight);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "90%" : "80%",
            height: windowHeight > 600 ? "60%" : "85%",
          },
        ]}
      >
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 34 }}>Welcome !</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 300,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
