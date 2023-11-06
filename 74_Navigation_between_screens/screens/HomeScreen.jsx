import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";
export default function Home(props) {
  // console.log("props = " props);
  const navigation = useNavigation();
  // console.log("navigation = ", navigation);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go To about 1"
        onPress={() => props.navigation.navigate("About")}
      />
      <Button
        title="Go To about 2"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
