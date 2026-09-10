import { StyleSheet, Text, View, Image } from 'react-native'


const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>PawMatch</Text>
        <Text>Skip</Text>
      </View>

      <View style={styles.content}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
          style={styles.image}
        />
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 250,
    height: 240,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  }
})