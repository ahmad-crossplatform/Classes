import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "@react-native-material/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";
import { AuthContext } from "../contexts/AuthContext";
const LoginScreen: React.FC<
  NativeStackScreenProps<StackScreens, "LoginScreen">
> = (props) => {
  const [disabled, setDisabled] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  useEffect(() => {
    setDisabled(username.length === 0 || password.length === 0);
  }, [username, password]);

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        onChangeText={setUsername}
        style={[styles.width80, styles.margin10]}
      />
      <TextInput
        label="Password"
        secureTextEntry
        onChangeText={setPassword}
        style={[styles.width80, styles.margin10]}
      />
      <Button
        color={disabled ? "grey" : undefined}
        title="Login"
        disabled={disabled}
        style={[styles.width80, styles.margin10]}
        onPress={() => {
          authContext?.login(username, password);
        }}
      />
      <Button
        title="Register"
        style={[styles.width80, styles.margin10]}
        onPress={() => {
          props.navigation.navigate("RegisterScreen");
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  width80: {
    width: "80%",
  },
  margin10: {
    margin: 10,
  },
});
