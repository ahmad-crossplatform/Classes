import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  set,
  DataSnapshot,
  Unsubscribe as UnsubscribeRTDB,
} from "firebase/database";

import {
  onSnapshot,
  Unsubscribe as UnsubscribeFireStore,
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUqYBuhGwqrCRy2BAb2bvwEaqjKxBdjTw",
  authDomain: "mybestapp-5c7aa.firebaseapp.com",
  databaseURL:
    "https://mybestapp-5c7aa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mybestapp-5c7aa",
  storageBucket: "mybestapp-5c7aa.appspot.com",
  messagingSenderId: "53768294809",
  appId: "1:53768294809:web:e9fcaa76bc435b44490308",
  measurementId: "G-6EQM4E329Z",
};
var app: FirebaseApp;
export const initFirebase = () => {
  app = initializeApp(firebaseConfig);
};

interface IScoreListener {
  userId: string;
  onUpdate: (score: number) => void;
}
export const subscribeUserOnRTDB = (props: IScoreListener): UnsubscribeRTDB => {
  const db = getDatabase();
  const reference = ref(db, "users/" + props.userId);
  return onValue(reference, (snapshot: DataSnapshot) => {
    try {
      props.onUpdate(snapshot.val().highScore);
    } catch (error) {
      setHighScoreOnRTDB(props.userId, 0);
    }
  });
};

export const setHighScoreOnRTDB = (userId: string, score: number) => {
  const db = getDatabase(app);
  const reference = ref(db, "users/" + userId);
  set(reference, {
    highScore: score,
  });
};

export const subscribeUserOnFireStore = (
  userId: "string",
  callback: (_: number) => void
): UnsubscribeFireStore => {
  const db = getFirestore();
  const reference = doc(db, "users", userId);

  return onSnapshot(reference, (snapshot) => {
    if (snapshot.data()) {
      var data = snapshot.data() as { score: number };
      if (data) callback(data.score);
    }
  });
};

export const setHighScoreOnFireStore = async (
  userId: string,
  score: number
) => {
  const db = getFirestore();
  const reference = doc(db, "users", userId);

  await setDoc(reference, {
    score: score,
  });
};
