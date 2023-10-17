import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React from "react";

export default function PokemonCard(props) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{props.name}</Text>
        <Text>{props.hp}</Text>
      </View>
      {/* <Image
        source={props.image}
        accessibilityLabel={`${props.name} pokemon`}
        alt={`${props.name} pokemon`}
      /> */}

      <View>
        <Text>{props.type}</Text>
      </View>
      <View>
        <Text>Moves: {props.moves.join(", ")}</Text>
      </View>

      <View>
        <Text>Weakness: {props.weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
