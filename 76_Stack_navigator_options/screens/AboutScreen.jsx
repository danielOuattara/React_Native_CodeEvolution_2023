import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function About(props) {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>

      {/* print params */}
      <Text style={styles.text}>{JSON.stringify(props.route.params.id)}</Text>
      {/* update params */}
      <Button
        title="Update name"
        onPress={() => props.navigation.setParams({ id: 47 })}
      />
      {/* go back to Home */}
      <Button
        title="Go To Home 1"
        onPress={() =>
          props.navigation.navigate("Home", { data: "Page viewed" })
        }
      />

      {/* ------------------------------ */}

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
