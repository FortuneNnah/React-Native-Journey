import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const contact = () => {
  return (
    <View style={styles.container}>
      <Text>contact</Text>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})