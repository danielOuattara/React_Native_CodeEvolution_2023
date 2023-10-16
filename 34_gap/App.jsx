import { StyleSheet, View } from "react-native";
import Box from "./components/Box";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00" }}>box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>box 7</Box>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    height: 300,
    flexWrap: "wrap",
    // rowGap: 20,
    // columnGap: 40,
    gap: 10,
  },
});

/*  
NOTE: 'rowGap' and 'columnGap' have precedence over 'gap'
*/
