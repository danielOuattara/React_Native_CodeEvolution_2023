import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const validateForm = () => {
    if (!username) {
      errors.username = "Username is required";
    }
    if (!password) {
      errors.password = "Username is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0; // if no error
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : null}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("./assets/bulbasaur.png")}
          alt="icon"
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.label}>Username : </Text>
        <TextInput
          placeholder="Enter your username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        {errors.username && (
          <Text style={styles.errors}>{errors.username}</Text>
        )}
        <Text style={styles.label}>Password : </Text>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        {errors.password && (
          <Text style={styles.errors}>{errors.password}</Text>
        )}
        <Button
          title="submit"
          color={"green"}
          onPress={() => console.log("pressed")}
        />
      </View>
    </KeyboardAvoidingView>
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

  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 50,
  },
  errors: {
    color: "red",
    marginBottom: 10,
  },
});
