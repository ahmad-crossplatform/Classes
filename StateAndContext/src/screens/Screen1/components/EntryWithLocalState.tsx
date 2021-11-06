import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const EntryWithLocalState = () => {
    const [text, setText] = useState("")
    return (
        <View>
            <Text>The text below  presents a local state</Text>
            <Text>{text}</Text>
            <TextInput placeholder={'set text to change the local state'} style={styles.input} onChangeText={(newText)=>setText(newText)}/>
        </View>
    )
}

export default EntryWithLocalState

const styles = StyleSheet.create({

    input:{
        borderColor:'black',
        borderWidth:1,
        textAlign:'center'
    }
})
