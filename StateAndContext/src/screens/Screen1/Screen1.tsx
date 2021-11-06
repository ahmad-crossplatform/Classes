import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { AppContext } from '../../context/AppContext'
import EntryWithLocalState from './components/EntryWithLocalState'

export const Screen1 = () => {
  const context = useContext(AppContext)
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text>The timer below is coming from context</Text>
        <Text style={{textAlign:'center'}}>{context?.simpleText}</Text>
      </View>
      <View style={styles.entry}>
        <EntryWithLocalState/>
      </View>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
      borderColor: 'red',
      borderWidth:3,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
    }, 
    entry:{
      padding:15,
      borderColor: 'blue',
      borderWidth:3,
      
      alignItems: 'center',
      justifyContent: 'center',
    } 
  });
