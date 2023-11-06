import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, About } from "./screens/index";
// import Home from "./screens/HomeScreen";
// import About from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#5a48fff4",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 24,
            color: "orange",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Welcome Home",
            headerStyle: {
              backgroundColor: "#5a48fff4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "400",
              fontSize: 24,
              color: "orange",
            },

            headerRight: () => (
              <Pressable onPress={() => alert("Right Menu button pressed")}>
                <Text style={{ color: "#fff", fontSize: 20 }}>Right</Text>
              </Pressable>
            ),
            headerLeft: () => (
              <Pressable onPress={() => alert("Left Menu button pressed")}>
                <Text style={{ color: "#fff", fontSize: 20, marginRight: 30 }}>
                  Left
                </Text>
              </Pressable>
            ),

            contentStyle: {
              backgroundColor: "#f290ff",
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          initialParams={{
            id: 0,
            name: "guest",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
