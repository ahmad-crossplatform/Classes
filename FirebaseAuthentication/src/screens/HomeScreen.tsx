import { Button } from "@react-native-material/core";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";

const HomeScreen = () => {
  const authContext = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Logout"
        onPress={() => {
          authContext?.logout();
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
