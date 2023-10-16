import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Greet(props) {
  return (
    <View>
      <Text>Greeting {props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
