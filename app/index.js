import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Home section</Text>

      <Link style={styles.link} href='/About'>About section</Link>
      <Link style={styles.link} href='/Contact'>Contact section</Link>
      <Link style={styles.link} href='/login'>Log in</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  
  link: {
    margin: 20,
    textDecorationLine: "underline"
  }
})