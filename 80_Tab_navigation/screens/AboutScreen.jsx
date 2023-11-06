import { StyleSheet, Text, View, Button } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";

export default function About({ navigation, route }) {
  // const navigation = useNavigation();
  // const route = useRoute();

  // number 2 option
  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [navigation, route.params.name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>

      {/* print params */}
      <Text style={styles.text}>{JSON.stringify(route.params.name)}</Text>

      {/* update params */}
      <Button
        title="Update name"
        onPress={() => navigation.setParams({ name: "Mike Tyson" })}
      />
      {/* go back to Home */}
      <Button
        title="Go To Home 2"
        onPress={() => navigation.navigate("Home", { visited: "React Native" })}
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
