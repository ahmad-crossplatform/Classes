import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { StackScreens } from '../helpers/types'

export const RootScreen:React.FC<NativeStackScreenProps<StackScreens,'RootScreen'>> = (props) => {
    const [enteredValue, setEnteredValue] = React.useState("")
    console.log(props)
    return (
       <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SimpleScreen')}>
            <Text style={styles.buttonText} >Click to go to Simple Page</Text>
        </TouchableOpacity>   
        <View style={{alignItems:'center'}}>
            <TextInput style={styles.input} placeholder="Enter a value to pass to the next screen" onChangeText={setEnteredValue}/>
            {enteredValue.length>0 &&            
             <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('ScreenWithParams',{text:enteredValue})}>
                <Text style={styles.buttonText}>Click to go to Simple Page With Params</Text>
            </TouchableOpacity>  
            }

        </View>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('ScreenWithTabs')}>
            <Text style={styles.buttonText}>Click to go to Page With Tabs</Text>
        </TouchableOpacity>   
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    button:{
        padding:25,
        borderRadius:25,
        
        borderColor:'green',
        borderWidth:2,

    
    },
    buttonText:{
        color: 'black', 
        fontSize:15, 
        fontWeight:'bold'
    },
    input:{
        borderColor:'black',
        borderWidth:1,
        marginBottom:5,
        padding:2,
        width:270
    }
  });
  
