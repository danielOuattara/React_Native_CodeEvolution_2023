import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [postList, setPostList] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10`,
    );
    const data = await response.json();
    setPostList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.card}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
          ListEmptyComponent={<Text>List is empty, No items found</Text>}
          ListHeaderComponent={() => (
            <Text style={styles.headerText}>Heading: Starting List</Text>
          )}
          ListFooterComponent={() => (
            <Text style={styles.footerText}>Footer: End of List</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: "#666",
  },

  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 20,
    color: "rgb(3, 140, 194)",
  },
  footerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 20,
  },
});
