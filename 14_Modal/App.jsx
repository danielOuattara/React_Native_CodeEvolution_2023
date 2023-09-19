import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Modal, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button
        title="Show Modal"
        onPress={() => setModalIsVisible(true)}
        color={"green"}
        // disabled
      />
      <Modal
        visible={modalIsVisible}
        onRequestClose={() => setModalIsVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.modalContainer}>
          <Text>Modal Content </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            iure in libero nesciunt quod totam, minus at sit ex voluptates atque
            quia aliquid repellat necessitatibus cum quas, adipisci, recusandae
            saepe!
          </Text>
          <Button
            title="Close Modal"
            color={"midnightblue"}
            onPress={() => setModalIsVisible(false)}
          />
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 40,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 40,
    zIndex: 10,
  },
});
