import { logEvent, setCurrentScreen } from "expo-firebase-analytics";

import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  initFirebase,
  setHighScoreOnFireStore,
  setHighScoreOnRTDB,
  subscribeUserOnFireStore,
  subscribeUserOnRTDB,
} from "./services/firebaseService";
export default function App() {
  const [scoreRTDB, setScoreRTDB] = React.useState(0);
  const [scoreFireStore, setscoreFireStore] = React.useState(0);
  initFirebase();

  React.useEffect(() => {
    setCurrentScreen("Main Screen");
    const unsubscribeFireStore = subscribeUserOnFireStore({
      userId: "Adam",
      onUpdate: (score) => {
        setscoreFireStore(score);
      },
    });

    const unsubscribeRTDB = subscribeUserOnRTDB({
      userId: "Adam",
      onUpdate: (score) => {
        setScoreRTDB(score);
      },
    });

    return () => {
      if (unsubscribeRTDB) {
        unsubscribeRTDB();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.rtdb}>
        <Text style={styles.title}>Realtime Database</Text>
        <Text>The score is</Text>
        <Text style={styles.score}>{scoreRTDB}</Text>

        <Button
          title="Add 1 to Score"
          onPress={() => {
            logEvent("score_set", { username: "Adam", score: scoreRTDB });
            setHighScoreOnRTDB("Adam", scoreRTDB + 1);
          }}
        />
      </View>

      <View style={styles.firestore}>
        <Text style={styles.title}>FireStore</Text>
        <Text>The score is</Text>
        <Text style={styles.score}>{scoreFireStore}</Text>
        <Button
          title="Add 1 to Score"
          onPress={() => {
            logEvent("score_set", { username: "Adam", score: scoreRTDB });
            setHighScoreOnFireStore("Adam", scoreFireStore + 1);
          }}
        />
      </View>
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

  rtdb: {
    flex: 1,
    width: "100%",
    backgroundColor: "#b0d6b7",
    alignItems: "center",
    justifyContent: "center",
  },
  firestore: {
    flex: 1,
    width: "100%",
    backgroundColor: "#c4a9b3",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  score: {
    fontSize: 55,
    fontWeight: "bold",
    color: "red",
  },
});
