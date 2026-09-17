import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { router } from 'expo-router'

const navigateToNextScreen = () => {
  router.push('/About')
}

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>PawMatch</Text>

        <Pressable style={styles.skipButton} onPress={navigateToNextScreen}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/vector-1740286698436-d4049d34f57c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D',
          }}
          style={styles.image}
        />
        <Text style={styles.textcontent}>Your new best Friend is waiting</Text>
        <Text style={styles.description}>
          Discover loving cats looking for a forever home and find the companion that fits your life perfectly
        </Text>

        <Pressable style={styles.button} onPress={navigateToNextScreen}>
          <Text style={styles.buttonText}>Let's Find My Pup</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8e2d0',
    paddingTop: 52,
    paddingBottom: 28,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 22,
    paddingVertical: 6,
    marginBottom: 8,
  },

  logo: {
    fontFamily: 'sans-serif',
    fontWeight: '800',
    fontSize: 22,
    color: '#111827',
    letterSpacing: 0.3,
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
    fontWeight: '600',
  },

  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 8,
  },

  image: {
    width: '100%',
    maxWidth: 320,
    height: 260,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 28,
    marginBottom: 24,
  },

  textcontent: {
    width: '100%',
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'left',
    marginBottom: 10,
  },

  description: {
    width: '100%',
    fontSize: 15,
    lineHeight: 22,
    color: '#666d76',
    textAlign: 'left',
    marginBottom: 10,
  },

  button: {
    width: '100%',
    backgroundColor: '#df8562',
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginTop: 26,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },

  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '700',
  },
})