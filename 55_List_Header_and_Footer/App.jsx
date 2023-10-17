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
      <FlatList
        data={pokemonList}
        renderItem={({ item, index }) => {
          // console.log(item.id);
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
          // console.log(item);
          <View
            style={{
              height: 16,
              marginHorizontal: 26,
            }}
          />;
        }}
        ListEmptyComponent={<Text>List is empty, No items found</Text>}
        // ListEmptyComponent={({ onLayout, style }) => {
        //   console.log(onLayout.toString());

        //   <Text style={{ flex: 1, borderWidth: 2, borderColor: "green" }}>
        //     List is empty, No empty
        //   </Text>;
        // }}

        ListHeaderComponent={() => (
          <Text style={styles.headerText}>Pokemon List</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.footerText}>End of List</Text>
        )}
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
    marginHorizontal: 26,
  },
  cardText: {
    fontSize: 22,
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
});

/*  
NOTE: Rendering a list using map() method and ScrollView 
      component is not the optimized technique 
*/
