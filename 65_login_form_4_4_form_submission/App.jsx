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
  const [errors, setErrors] = useState({
    usernameError: "",
    passwordError: "",
  });

  const validateForm = () => {
    let inputErrors = {};
    if (!username) inputErrors.usernameError = "Username is required";
    if (!password) inputErrors.passwordError = "Password is required";

    setErrors(() => inputErrors);

    return Object.keys(inputErrors).length === 0; // true if no error
  };

  handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitting form", username, password);
      setUsername("");
      setPassword("");
      setErrors({
        usernameError: "",
        passwordError: "",
      });
    } else {
      console.log("Form Not Submitted. Check message on screen");
    }
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
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Username : </Text>
          <TextInput
            placeholder="Enter your username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
          {errors.usernameError && (
            <Text style={styles.errors}>{errors.usernameError}</Text>
          )}
        </View>

        <View style={styles.inputBlock}>
          <Text style={styles.label}>Password : </Text>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          {errors.passwordError && (
            <Text style={styles.errors}>{errors.passwordError}</Text>
          )}
        </View>
        <View style={styles.submitBtn}>
          <Button title="submit" color={"green"} onPress={handleSubmit} />
        </View>
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
  inputBlock: {
    marginVertical: 5,
    height: 100,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#c5c5c5",
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
  },

  submitBtn: {
    marginTop: 25,
  },

  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 25,
  },
  errors: {
    color: "red",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
