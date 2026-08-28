import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Register = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f3fa' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{ uri: 'https://images.unsplash.com/vector-1754829494850-95549a50701f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
          />
          <Text style={styles.text}>Welcome to Finora</Text>
          <Text style={styles.subtext}> Explore a modern experience built for speed and simplicity</Text>
        </View>

        <View>
          <Pressable style={styles.button}>
            <Text>Get Started</Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    flex: 1,
    letterSpacing: 60,
  },

  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: 80,
    marginBottom: 20,
  },

  text: {
    fontSize: 30,
    fontWeight: 700,
    letterSpacing: 1.2,
    alignSelf: 'center'
  },

  subtext: {
    fontSize: 15,
    maxWidth: 300,
    color: '#323232',
    textAlign: 'center',
    paddingVertical: 8,
    paddingBottom: 20,
  },

  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffaebb',
    flexDirection: 'row',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 8,
    textAlign: 'center',
  },

})