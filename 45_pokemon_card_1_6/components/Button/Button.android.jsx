import { Pressable, Text, StyleSheet } from "react-native";

export default function Button(props) {
  return (
    <Pressable onPress={props.onPress} style={styles.pressable}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  text: {
    color: "blue",
    fontSize: 18,
  },
});
