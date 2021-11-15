// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  User,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBg6zgUu4bx_9cEcpX8lsZUr19aMO5GXlc",
  authDomain: "ithogskolanauthentication.firebaseapp.com",
  projectId: "ithogskolanauthentication",
  storageBucket: "ithogskolanauthentication.appspot.com",
  messagingSenderId: "1032472587757",
  appId: "1:1032472587757:web:1d273c9bbf9ba946e38be4",
};

// Initialize Firebase
let app: FirebaseApp;

export const initFirebase = (callback: (_: boolean) => void) => {
  app = initializeApp(firebaseConfig);
  const auth = getAuth();
  auth.onAuthStateChanged((state) => {
    if (state) {
      callback(true); //current user signed in
    } else {
      callback(false); //current user NOT signed in
    }
  });
};

export const fbRegister = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<UserCredential> => {
  const auth = getAuth(app);

  const createUserResponse = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const newUser: User = {
    ...createUserResponse.user,
    displayName: firstName + " " + lastName,
  };
  newUser.email;
  await updateCurrentUser(auth, newUser);
  return createUserResponse;
};

export const fbLogout = async () => {
  const auth = getAuth(app);
  await auth.signOut();
};

export const fbLogin = async (
  email: string,
  password: string
): Promise<UserCredential | undefined> => {
  const auth = getAuth(app);

  try {
    const credentualUser = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return credentualUser;
  } catch (error) {
    return undefined;
  }
};
