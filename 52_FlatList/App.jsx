import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import pokemonList from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/*
       <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          console.log("pokemon.id = ", pokemon.id);
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView> 
      
      ----------------------------------------------------------- */}

      <FlatList
        data={pokemonList}
        renderItem={({ item, index }) => {
          console.log(item.id);
          return (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          );
        }}
        // horizontal
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfdfdf",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    marginHorizontal: 26,
  },
  cardText: {
    fontSize: 22,
  },
});

/*  
NOTE: Rendering a list using map() method and ScrollView 
      component is not the optimized technique 
*/
