import { StyleSheet, SafeAreaView, Platform } from "react-native";
import PokemonCard from "./components/Button/PokemonCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfdfdf",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
