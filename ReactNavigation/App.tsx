import React from 'react';
import { RootScreen } from './src/Screens/RootScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreens } from './src/helpers/types';
import SimpleScreen from './src/Screens/SimpleScreen';
import TabsScreen from './src/Screens/TabsScreen';
import { SimpleScreensWithParams } from './src/Screens/SimpleScreensWithParams';
export default function App() {
  const Stack = createNativeStackNavigator<StackScreens>() ;  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="RootScreen">
         <Stack.Screen name="RootScreen" component={RootScreen} options={{headerShown:true}}/>
         <Stack.Screen name="SimpleScreen" component={SimpleScreen}/>
         <Stack.Screen name="ScreenWithParams" component={SimpleScreensWithParams}/>
         <Stack.Screen name="ScreenWithTabs" component={TabsScreen}/>
   </Stack.Navigator>
</NavigationContainer>
  );
}

