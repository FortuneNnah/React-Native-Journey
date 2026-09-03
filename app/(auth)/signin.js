import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'

const Signin = () => {
  const navigation = useNavigation()

  const handleButton = () => {
    navigation.navigate('login')
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{ uri: 'https://images.unsplash.com/vector-1754829494850-95549a50701f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            alt='logo'
          />  
          <Text style={styles.text}>Welcome to Finora</Text>
          <Text style={styles.subtext}> Explore a modern experience built for speed and simplicity</Text>
        </View>

        <View>

          <Pressable
            style={styles.button}
            href='/login'
            onPress={handleButton}
          >
            <Text style={styles.signin}>Get Started</Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Signin

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
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
    fontSize: 35,
    fontWeight: 700,
    alignSelf: 'center'
  },

  subtext: {
    fontSize: 15,
    maxWidth: 300,
    fontWeight: 100,
    color: '#474646',
    textAlign: 'center',
    paddingVertical: 5,
    paddingBottom: 30,
  },

  button: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e2cf6',
    borderRadius: 50,
    paddingVertical: 17,
    elevation: 8,
    textAlign: 'center',
  },
 
  signin: {
    fontSize: 15,
    color: '#fff',
  }

})