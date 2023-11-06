import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, About } from "./screens/index";
// import Home from "./screens/HomeScreen";
// import About from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
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
        options={({ route }) => ({ title: route.params?.name })}
      />
      <Stack.Screen
        name="About"
        component={About}
        initialParams={{
          id: 0,
          name: "guest",
        }}
        // number 1 option
        // options={({ route }) => ({ title: route.params?.name })}
      />
    </Stack.Navigator>
  );
};

export default function StackNavigatorRoot() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
