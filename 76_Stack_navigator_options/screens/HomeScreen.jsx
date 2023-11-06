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
        onPress={() => props.navigation.navigate("About" /*  { id: 7 } */)}
      />
      <Text style={styles.text}>
        {JSON.stringify(props.route.params?.data)}
      </Text>

      <Button
        title="Go To about 2"
        onPress={() => navigation.navigate("About" /* { name: "john doe" } */)}
      />
      <Text style={styles.text}>
        {JSON.stringify(props.route.params?.visited)}
      </Text>
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
