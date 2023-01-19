import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigator from "./Navigator";
import SearchScreen from "../screens/SearchScreen";
import MyAccount from "../screens/MyAccount";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarLabelStyle: { marginBottom: 10 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Navigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Image
              style={{ width: 20, height: 20, marginTop: 5 }}
              source={require("../assets/home.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Wishlist",
          tabBarIcon: () => (
            <Image
              style={{ width: 20, height: 20, marginTop: 5 }}
              source={require("../assets/heart.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: "MyAccount",
          tabBarIcon: () => (
            <Image
              style={{ width: 20, height: 20, marginTop: 5 }}
              source={require("../assets/user.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
