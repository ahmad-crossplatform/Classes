import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./src/screens/Screen1";
import { tokens } from "./src/translation/appStructure";
import { setI18nConfig, translate } from "./src/translation/translation";

export default function App() {
  setI18nConfig();

  return (
    <View style={styles.container}>
      <Text style={{ margin: 15 }}>
        {translate(tokens.screens.app.MainText)}
      </Text>
      <Screen1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
