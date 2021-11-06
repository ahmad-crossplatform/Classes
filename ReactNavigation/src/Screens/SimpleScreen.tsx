import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SimpleScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is a Simple Screen</Text>
        </View>
    )
}

export default SimpleScreen

const styles = StyleSheet.create({
    container: {
        flex:1 , 
        justifyContent:'center',
        alignItems:'center'
    }
})
