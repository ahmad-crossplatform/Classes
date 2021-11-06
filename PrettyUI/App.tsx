
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Logo from './assets/gaming.svg';
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';


export default function App() {
  const [fontsLoaded] = useFonts({'CrazyFont':require('./assets/fonts/CevicheOne-Regular.ttf')});
  return (
    <SafeAreaView style={styles.container}>
      <Text >This image is from an SVG file</Text> 
      <Logo height={250}  style={styles.logo}/>
      <Text style={styles.text}>Text With Custom Font</Text> 
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button with Icons</Text>
        <MaterialIcons name="login" size={30} color="white"/>
      </TouchableOpacity>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logo: {
    flex: 1 ,
    
  },
  text:{
    fontFamily:'CrazyFont',
    fontSize:45,
    textAlign:'center'

  },
  button :{
    backgroundColor: 'green',
    width:'90%',
    height:50,
    borderRadius:15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between'

  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white', 
    fontSize:20,
  }
  
});
