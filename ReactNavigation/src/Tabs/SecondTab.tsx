import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SecondTab = () => {
  return (
    <View style={styles.container}>
      <Text>Second Tab</Text>
    </View>
  );
};

export default SecondTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
