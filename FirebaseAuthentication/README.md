# Firebase Authentication

## Intro

Firebase provides authentication service out of the box. With firebase sdk you can register your customers and let them sign in to the app using email/password , SMS , or social media.

Make sure to enable authentication from firebase console before registering users.

To be able to use the authentication functionalities we use `getAuth()`.

## Authentication and React Navigation

[Read here for more details](https://reactnavigation.org/docs/auth-flow/)

Our app will have 3 pages; LoginPage, RegisterPage, and Homepage which will have a logout button.

We use Native Stack navigator to move between them. However, navigating to HomePage requires a signed in user. Therefore, we write our navigator as follows

```ts
<NavigationContainer>
  <StackNavigator.Navigator>
    {!authContext?.isUserSignedIn && (
      <>
        <StackNavigator.Screen name="LoginScreen" component={LoginScreen} />
        <StackNavigator.Screen
          name="RegisterScreen"
          component={RegisterScreen}
        />
      </>
    )}
    {authContext?.isUserSignedIn && (
      <StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
    )}
  </StackNavigator.Navigator>
</NavigationContainer>
```

According to React Navigation's documentation:

"`Don't manually navigate when conditionally rendering screens`"
That means lets the state takes care of moving between the screens when user is not signed in to screens where user is signed in and vise versa. No need to manually call "navigate" after signing in and out.

Notice that we are using `authContext` to manage the state of user.

## AuthenticationContext

Our `AuthContext` and its provider will take care of the authentication state and all calls which determine that state such as `signIn` and `signOut`

In the useEffect, we initialize the connection with Firebase and we pass a callback which will determine if the user is already logged in from a previous session or not. This way, there is no need to sign in every time we launch the app.

```ts
export const AuthContextProvider: React.FC = (props) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    initFirebase((result) => setIsUserSignedIn(result));
  }, []);

  const login = async (userName: string, password: string) => {
    const userCredentials = await fbLogin(userName, password);
    if (userCredentials) {
    } else {
      alert("Wrong username/password");
    }
  };

  const register = async (
    firstName: string,
    lastName: string,
    userName: string,
    password: string
  ) => {
    await fbRegister(firstName, lastName, userName, password);
  };

  const logout = () => {
    fbLogout();
  };
  return (
    <AuthContext.Provider value={{ isUserSignedIn, register, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
```

## FirebaseService.ts

Lets have a look at code in our `firebaseService.ts`.

```ts
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
```

Initializing the connection with Firebase subscribing to `auth.onAuthStateChanged` which is affected by the fact if there is a user from this device was signed in or not. then we can executing call back passed from `AuthContext`.

```ts
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
```

Here we register the user and add his/her first and last name to be used later as a profile.
It is important to mention that registering will automatically signIn the user. Which will send an event to `auth.onAuthStateChanged` and would sign in to our app automatically .

```ts
export const fbLogin = async (
  email: string,
  password: string
): Promise<UserCredential | undefined> => {
  const auth = getAuth(app);

  try {
    const credentialUser = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return credentialUser;
  } catch (error) {
    return undefined;
  }
};
```

Here we login using email and password. We place the process under Try/Catch in case the user enters wrong email or password . This will send an event to `auth.onAuthStateChanged`.

```ts
export const fbLogout = async () => {
  const auth = getAuth(app);
  await auth.signOut();
};
```

Maybe the simplest call in the auth SDK , which would remove the user and send an event to `auth.onAuthStateChanged`.
