import { StyleSheet, View } from "react-native";
import Box from "./components/Box";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", flexGrow: 0 }}>box 1 </Box>
      <Box style={{ backgroundColor: "#b65d1f", flexGrow: 1 }}>box 2 </Box>
      <Box style={{ backgroundColor: "#1c4c56", flexGrow: 2 }}>box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>box 4</Box>
      {/* <Box style={{ backgroundColor: "#6b0803" }}>box 5</Box> */}
      {/* <Box style={{ backgroundColor: "#1c4c56" }}>box 6</Box> */}
      {/* <Box style={{ backgroundColor: "#b95f21" }}>box 7</Box> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    flex: 1,
    // width: 300,
  },
});

/* 
flexGrow: 0 // is the default value
*/
