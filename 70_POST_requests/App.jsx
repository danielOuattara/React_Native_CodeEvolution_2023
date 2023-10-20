import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  //--- GET
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  //--- POST
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const fetchData = async (limit = 10) => {
    setIsLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    );
    const data = await response.json();
    setPostList(data);
    setIsLoading(false);
  };

  const handleRefreshData = () => {
    setRefreshData(true);
    fetchData(20);
    setRefreshData(false);
  };

  const handlePost = async () => {
    /* 
      CAUTION: the API always returns 'id: 101' for any created post,
               this warning if many post are created one after another 
    */

    setIsPosting(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: 1,
      }),
    });

    const data = await response.json();

    setPostList((prevState) => [data, ...prevState]);
    setPostTitle("");
    setPostBody("");
    setIsPosting(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter the title"
            value={postTitle}
            onChangeText={setPostTitle}
            autoComplete="off"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.textInput, styles.multiLineText]}
            placeholder="Enter the body"
            value={postBody}
            onChangeText={setPostBody}
            autoComplete="off"
            autoCapitalize="none"
            multiline
          />
          <View style={styles.addPostBtn}>
            <Button
              title={isPosting ? "Adding..." : "Add Post"}
              color={"green"}
              onPress={handlePost}
              disabled={isPosting}
            />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={postList}
            renderItem={({ item, index }) => (
              <View key={index} style={styles.card}>
                <Text style={styles.titleText}>
                  {" "}
                  {index + 1} - {item.title}
                </Text>
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
            refreshing={refreshData}
            onRefresh={handleRefreshData}
          />
        </View>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
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
    borderRadius: 6,
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
    color: "rgb(3, 140, 194)",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },

  //-----

  inputContainer: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "grey",
  },
  textInput: {
    // height: 40,
    borderWidth: 1,
    borderColor: "lightgrey",
    marginBottom: 8,
    padding: 8,
    borderRadius: 6,
    fontSize: 16,
  },
  multiLineText: {
    minHeight: 100,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  addPostBtn: {
    marginTop: 30,
  },
});
