import { StyleSheet, View } from "react-native";
import Box from "./components/Box";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    // <View style={{ backgroundColor: "plum", flex: 1 }}></View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", alignSelf: "flex-start" }}>
        box 1
      </Box>
      <Box style={{ backgroundColor: "#b65d1f", alignSelf: "flex-end" }}>
        box 2
      </Box>
      <Box style={{ backgroundColor: "#1c4c56", alignSelf: "center" }}>
        box 3
      </Box>
      <Box style={{ backgroundColor: "#ab9156", alignSelf: "stretch" }}>
        box 4
      </Box>
      <Box style={{ backgroundColor: "#6b0803", alignSelf: "auto" }}>box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>box 7</Box>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "stretch", // default
    alignItems: "flex-end",
    // alignItems: "flex-start",
    // alignItems: "center",
    // alignItems: "baseline",
    marginTop: 64,
    borderWidth: 4,
    borderColor: "red",
  },
});

/*  
- alignSelf: auto  // the default value that then inherits value from alignItems values 
- if "alignSelf" is specified for an item then it always override "alignItems" value.
- if "alignSelf" is set to 'auto' then the targeted item will take value of "alignItems" 

*/
