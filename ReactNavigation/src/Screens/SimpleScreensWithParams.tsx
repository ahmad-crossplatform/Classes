import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";

interface IProps
  extends NativeStackScreenProps<StackScreens, "ScreenWithParams"> {}
export const SimpleScreensWithParams: React.FC<IProps> = (props) => {
  const params = props.route.params;

  return (
    <View style={styles.container}>
      <Text>You have passed</Text>
      <Text style={{ color: "blue" }}>{params.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
