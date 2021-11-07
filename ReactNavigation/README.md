# React Navigation

React Native does not come with a navigation mechanism , a way to move between pages, and instead it left to entirely in the hands of opensource projects.
The most popular library for a navigation is [React Navigation](https://reactnavigation.org)

1. `yarn add @react-navigation/native`
2. `expo install react-native-screens react-native-safe-area-context`
3. Wrap your app with `Navigation Container`

```js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

## Native Stack Navigation

Stack Navigation is the most classic and simple way of navigation. Its basically moving from one page to another page with the ability to return to the previous page by pressing a back button .

1. `yarn add @react-navigation/native-stack`
1. Import the library

```js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
```

2. Create the stack

```js
const Stack = createNativeStackNavigator();
```

3. Use its member `Navigator` and `Screen` so the navigator will hold multiple screens.

```js
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
</NavigationContainer>
```

4. By default this will insert some navigation stuff into the props of screens which could be used to navigate from them to another screen

```js
const HomeScreen: React.FC = (props:any) => {return (
/* some code */
 <TouchableOpacity  onPress={() => props.navigation.navigate('Details',{id:3})}>
/*more code*/

)}
```

## Navigation With Tabs

The implementation of tabs is very similar to the implementation of stack navigation .In fact it is even simpler. Since, usually, moving between tabs is taken care of you do not need to specify which tab you should go to and usually tabs do not require params to be passed among them.

```ts
const TabsScreen = () => {
  const TabsNavigation = createBottomTabNavigator();
  return (
    <TabsNavigation.Navigator>
      <TabsNavigation.Screen
        name="FirstTab"
        component={FirstTab}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="verified-user"
                color={focused ? "blue" : "grey"}
                size={30}
              />
            );
          },
        }}
      />
      <TabsNavigation.Screen
        name="SecondTab"
        component={SecondTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="facebook"
              size={30}
              color={focused ? "blue" : "grey"}
            />
          ),
        }}
      />
    </TabsNavigation.Navigator>
  );
};

export default TabsScreen;
```

## Navigation And Typescript

To utilize the power of typescript and enable typechecking and intellisense you can do that by applying the following simple steps

1. Knowing what screens would be in your navigator , you start by creating a type at maps these screens and what params they expect.

```ts
export type TabScreens = {
  FirstTab: undefined;
  SecondTab: undefined;
};

export type StackScreens = {
  RootScreen: undefined;
  SimpleScreen: undefined;
  ScreenWithParams: { text: string }; // This one expects text as a parameter.
  ScreenWithTabs: undefined;
};
```

2. Use the type when creating a navigator

```ts
const Stack = createNativeStackNavigator<StackScreens>();
```

3. Now when inserting Screens into navigator, you will have intellisense (autocomplete) for the names .

```ts
<Stack.Navigator initialRouteName="RootScreen">
  <Stack.Screen
    name="RootScreen"
    component={RootScreen}
    options={{ headerShown: false }}
  />
  <Stack.Screen name="SimpleScreen" component={SimpleScreen} />
  <Stack.Screen name="ScreenWithParams" component={SimpleScreensWithParams} />
  <Stack.Screen name="ScreenWithTabs" component={TabsScreen} />
</Stack.Navigator>
```

4. As a last step , we need to enable typescript tp the screens of which you would expect them to navigate from or to receive params.
   Typechecking will be applied on Screens to navigate to, and params to receive.

```ts
interface IProps
  extends NativeStackScreenProps<StackScreens, "ScreenWithParams"> {}
export const SimpleScreensWithParams: React.FC<IProps> = (props) => {
  const params = props.route.params;

  return (
    <View style={styles.container}>
      <Text>You have passed</Text>
      <Text style={{ color: "blue" }}>{params.text}</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("SimpleScreen")}
      >
        <Text style={styles.buttonText}>Click to go to Simple Page</Text>
      </TouchableOpacity>
    </View>
  );
};
```
