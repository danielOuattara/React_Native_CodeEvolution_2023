import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
  SectionList,
} from "react-native";
import pokemonList from "./data.json";
import groupedPokemonList from "./grouped-data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        data={pokemonList}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          );
        }}
        // horizontal
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={(item) => {
          return (
            <View
              style={{
                height: 16,
                marginHorizontal: 26,
              }}
            />
          );
        }}
        ListEmptyComponent={<Text>List is empty, No items found</Text>}
        ListHeaderComponent={() => (
          <Text style={styles.headerText}>Pokemon List</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.footerText}>End of List</Text>
        )}
      /> */}

      <View style={styles.scrollView}>
        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
          SectionSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
        />
      </View>
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
    // marginHorizontal: 26,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    // backgroundColor: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 12,
    color: "green",
  },
});

/*  
NOTE: Rendering a list using map() method and ScrollView 
      component is not the optimized technique 
*/
