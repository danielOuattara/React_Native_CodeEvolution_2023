import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("username = ", username);
  console.log("password = ", password);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username : </Text>
        <TextInput
          placeholder="Enter your username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          // onChange={(arg) => console.log(arg)}
          onChange={({ nativeEvent: { eventCount, target, text } }) =>
            console.log(
              "eventCount = ",
              eventCount,
              "\n",
              "target = ",
              target,
              `\n`,
              "text = ",
              text,
            )
          }
        />
        <Text style={styles.label}>Password : </Text>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title="submit"
          color={"green"}
          onPress={() => console.log("pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#e0e0e0",
  },
  form: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 7,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    // borderWidth: 1,
    // borderColor: "green",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#c5c5c5",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});
