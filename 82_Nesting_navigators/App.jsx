import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { Ionicons, Octicons } from "@expo/vector-icons";

import {
  Home,
  About,
  Dashboard,
  Settings,
  CoursesList,
  Profile,
} from "./screens/index";
import { StackNavigator } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Course List"
          component={CoursesList}
          options={{
            tabBarLabel: "Courses List",
            tabBarIcon: ({ color }) => (
              <Ionicons name="list" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "My profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={28} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "My profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Stack Nav"
          component={StackNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Octicons name="stack" size={28} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
