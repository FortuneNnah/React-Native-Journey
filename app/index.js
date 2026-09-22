import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { router } from 'expo-router'
import Button from './components/Button'

const navigateToNextScreen = () => {
  router.push('/About')
}

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Paw
          <Text style={{ color: '#df8562' }}>Match</Text>
        </Text>

        {/* <Pressable style={styles.skipButton} onPress={navigateToNextScreen}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable> */}
      </View>

      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/vector-1776255536795-5d01e379f92e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.image}
        />
        <Text style={styles.textcontent}>Your new best Friend is waiting....</Text>
        <Text style={styles.description}>
          Discover loving cats looking for a forever home and find the companion that fits your life perfectly
        </Text>

          <Button onPress={navigateToNextScreen}  />
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbfb',
    paddingTop: 52,
    paddingBottom: 28,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 22,
    paddingVertical: 6,
    marginBottom: 8,
  },

  logo: {
    fontFamily: 'sans-serif',
    fontWeight: '800',
    fontSize: 28,
    alignContent: 'center',
    color: '#111827',
    letterSpacing: 0.4,
  },

  skipButton: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  skip: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '700',
    letterSpacing: 0.2,
  },

  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 10,
  },

  image: {
    width: '100%',
    maxWidth: 320,
    height: 362,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 30,
    marginBottom: 26,
  },

  textcontent: {
    width: '100%',
    fontSize: 34,
    lineHeight: 42,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: -0.8,
  },

  description: {
    width: '100%',
    fontSize: 16,
    lineHeight: 24,
    color: '#666d76',
    textAlign: 'center',
    marginBottom: 8,
  },


})