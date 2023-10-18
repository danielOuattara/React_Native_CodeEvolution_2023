import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
  Text,
  View,
  Switch,
} from "react-native";
import React from "react";

import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="email@example.com"
        // secureTextEntry={true}
        keyboardType="default"
        autoComplete="off"
        autoCapitalize="none"
      />
      <Text style={styles.text}>My name is {name} </Text>

      <TextInput
        style={[styles.input, styles.multiLineText]}
        placeholder="Type your message"
        value={name}
        onChangeText={setName}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode </Text>
        <Switch
          value={isDarkMode}
          onValueChange={(arg) => {
            console.log(arg);
            return setIsDarkMode(!isDarkMode);
          }}
          // onChange={(arg) => {
          //   console.log(arg);
          //   return setIsDarkMode(!isDarkMode);
          // }}
          trackColor={{ false: "#767577", true: "#lightgreen" }}
          thumbColor={"#f4f3f4"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multiLineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
  },
});
