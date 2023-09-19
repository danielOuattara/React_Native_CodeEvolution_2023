import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
} from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title="Press Me"
          onPress={() => console.log("Button pressed")}
          color={"green"}
          // disabled
        />
        {/* Local image */}
        <Pressable onPress={() => console.log("Image Pressed")}>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>

        <Pressable onPress={() => console.log("Text Pressed")}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolorum voluptatem qui harum, dicta officia pariatur
            quae aspernatur ex eum omnis eveniet at temporibus suscipit nihil
            magni explicabo obcaecati illo deserunt illum nam, voluptatum modi,
            nesciunt vero. Ab numquam praesentium hic impedit eius eum
            voluptatibus cupiditate possimus, amet ex repudiandae deserunt eos,
            ipsa, nostrum qui aspernatur harum voluptatem autem. Id ea optio
            fugiat omnis incidunt eveniet amet illum est tempora maxime
            aspernatur modi commodi ratione totam recusandae doloribus tempore
            inventore, magnam dolor similique odit ipsam. Recusandae, eveniet.
            Magnam harum mollitia tempora beatae optio. Dicta impedit ad
            voluptatum veniam tenetur ea animi deleniti omnis cupiditate modi
            expedita, molestias nesciunt at consectetur id perspiciatis
            pariatur. Architecto repellendus mollitia doloribus sapiente illo
            nihil quas incidunt a blanditiis ducimus dolore laboriosam tenetur
            omnis facere, vel rem ut voluptas tempora. Illum autem dicta
            recusandae fugit ullam facilis animi molestias provident, incidunt
            totam doloremque libero? Nisi vero sed amet quos maiores quas
            necessitatibus quaerat officia nulla nesciunt tenetur error
            mollitia, dolore est nostrum similique suscipit fugit sit eum vel.
            Animi et voluptatum earum, porro, temporibus qui cupiditate culpa
            accusantium voluptates eligendi laborum nihil rem. Iure, mollitia
            aliquid quasi illum necessitatibus vitae placeat recusandae rerum
            iste dignissimos dolorum tenetur officia dolores reiciendis possimus
            eum corrupti et provident! Sapiente sit molestiae dolor animi
            molestias labore, vitae libero aut? Id consectetur corporis sapiente
            laboriosam, iusto atque placeat aperiam quod quis saepe itaque
            dolorem necessitatibus veritatis. Facere odit soluta doloremque
            magni provident quibusdam facilis eum ipsa aliquid unde tenetur
            autem voluptatibus voluptas vero rerum itaque eius, delectus saepe
            dolor ducimus natus debitis deleniti, veritatis fugiat. Nulla iste
            perspiciatis omnis doloremque, non libero asperiores mollitia
            commodi! Quae repellat nihil magnam id ab, veniam fugit facilis
            cupiditate repudiandae laboriosam ea doloremque minima in saepe esse
            doloribus provident possimus. Earum expedita totam dignissimos!
          </Text>
        </Pressable>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 40,
  },
});
