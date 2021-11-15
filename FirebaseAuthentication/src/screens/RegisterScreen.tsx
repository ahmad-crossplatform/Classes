import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "@react-native-material/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";
import { AuthContext } from "../contexts/AuthContext";
const RegisterScreen: React.FC<
  NativeStackScreenProps<StackScreens, "RegisterScreen">
> = (props) => {
  const [disabled, setDisabled] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log(
      firstName,
      lastName,
      username,
      password,
      repeatPassword,
      password !== repeatPassword
    );
    setDisabled(
      firstName.length === 0 ||
        lastName.length === 0 ||
        username.length === 0 ||
        password.length === 0 ||
        repeatPassword.length === 0 ||
        password !== repeatPassword
    );
  }, [firstName, lastName, username, password, repeatPassword]);

  return (
    <View style={styles.container}>
      <TextInput
        label="First Name"
        style={[styles.width80, styles.margin10]}
        onChangeText={setFirstName}
      />
      <TextInput
        label="Last Name"
        style={[styles.width80, styles.margin10]}
        onChangeText={setLastName}
      />
      <TextInput
        label="Email"
        style={[styles.width80, styles.margin10]}
        onChangeText={setUsername}
      />
      <TextInput
        secureTextEntry
        label="Password"
        style={[styles.width80, styles.margin10]}
        onChangeText={setPassword}
      />
      <TextInput
        secureTextEntry
        label="Repeat Password"
        style={[styles.width80, styles.margin10]}
        onChangeText={setRepeatPassword}
      />
      <Button
        color={disabled ? "grey" : undefined}
        disabled={disabled}
        title="Register"
        style={[styles.width80, styles.margin10]}
        onPress={async () => {
          await authContext?.register(firstName, lastName, username, password);
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

export default RegisterScreen;

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
