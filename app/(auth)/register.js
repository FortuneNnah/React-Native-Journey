import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const register = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#f0f3fa'}}>
      <view style={styles.container}>
        <view style={styles.header}>
          <image style={styles.image} source={{uri: ''}} />
        </view>
      </view>
    </SafeAreaView>
  )
}

export default register

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})