import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Dashboard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard screen</Text>
      <Button
        title="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <Button
        title="jump to settings"
        onPress={() => props.navigation.jumpTo("Settings")}
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
