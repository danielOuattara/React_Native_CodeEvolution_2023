import { StyleSheet, Text, View, Button } from "react-native";

export default function About(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Button
        title="Go To Home 1"
        onPress={() => props.navigation.navigate("Home")}
      />
      <Button
        title="Go To Home 2"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
