import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./src/contexts/AuthContext";
import { StackScreens } from "./src/helpers/types";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

export default function App() {
  return (
    <AuthContextProvider>
      <MainNavigator />
    </AuthContextProvider>
  );
}

export const MainNavigator = () => {
  const StackNavigator = createNativeStackNavigator<StackScreens>();
  const authContext = useContext(AuthContext);
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        {!authContext?.isUserSignedIn && (
          <>
            <StackNavigator.Screen name="LoginScreen" component={LoginScreen} />
            <StackNavigator.Screen
              name="RegisterScreen"
              component={RegisterScreen}
            />
          </>
        )}
        {authContext?.isUserSignedIn && (
          <StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
        )}
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};
