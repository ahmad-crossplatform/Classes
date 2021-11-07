import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FirstTab = () => {
  return (
    <View style={styles.container}>
      <Text>First Tab</Text>
    </View>
  );
};

export default FirstTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
