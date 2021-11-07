import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { tokens } from "../translation/appStructure";
import { translate } from "../translation/translation";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text>{translate(tokens.screens.screen1.MainText)}</Text>

      <Button
        title={translate(tokens.screens.screen1.Button)}
        onPress={() => {}}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
