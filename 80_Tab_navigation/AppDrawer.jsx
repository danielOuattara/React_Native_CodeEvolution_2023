import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Home, About, Dashboard, Settings } from "./screens/index";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Dashboard}
          options={{
            title: "User Dashboard",
            drawerLabel: "Dashboard Label",
            // drawerActiveBackgroundColor: "red",
            // drawerActiveTintColor: "#333",
            drawerContentStyle: { backgroundColor: "#d0fddd" },
          }}
        />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
