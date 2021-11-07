import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";

import { TabScreens } from "../helpers/types";
import FirstTab from "../Tabs/FirstTab";
import SecondTab from "../Tabs/SecondTab";

const TabsScreen = () => {
  const TabsNavigation = createBottomTabNavigator<TabScreens>();
  return (
    <TabsNavigation.Navigator>
      <TabsNavigation.Screen
        name="FirstTab"
        component={FirstTab}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="verified-user"
                color={focused ? "blue" : "grey"}
                size={30}
              />
            );
          },
        }}
      />
      <TabsNavigation.Screen
        name="SecondTab"
        component={SecondTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="facebook"
              size={30}
              color={focused ? "blue" : "grey"}
            />
          ),
        }}
      />
    </TabsNavigation.Navigator>
  );
};

export default TabsScreen;

const styles = StyleSheet.create({});
