import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 4,
    borderColor: "red",
  },
});
