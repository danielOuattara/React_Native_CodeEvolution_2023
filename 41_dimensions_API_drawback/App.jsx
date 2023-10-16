import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [localDimensions, setLocalDimensions] = useState({
    window: Dimensions.get("window"),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setLocalDimensions({ window });
    });

    return () => subscription?.remove();
  });

  const windowWidth = localDimensions.window.width;
  const windowHeight = localDimensions.window.height;

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

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
// console.log(windowWidth, windowHeight);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    height: 300,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  // text: {
  //   fontSize: windowWidth > 500 ? 50 : 24,
  // },
});
