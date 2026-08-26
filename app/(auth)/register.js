import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Register = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#f0f3fa'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
          style={styles.image} 
          source={{ uri: 'https://images.unsplash.com/vector-1754829494850-95549a50701f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: 50,
    height: 50,
  }

})