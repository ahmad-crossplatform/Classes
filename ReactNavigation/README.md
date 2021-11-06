# React Navigation 
React Native does not come with a navigation mechanism , a way to move between pages, and instead it left to entirely in the hands of opensource projects. 
The most popular library for a navigation is [React Navigation](https://reactnavigation.org)
1. `yarn add @react-navigation/native`
2. `expo install react-native-screens react-native-safe-area-context`
3. Wrap your app with `Navigation Container`
```js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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