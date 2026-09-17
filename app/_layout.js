import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack style={styles.container} screenOptions={{
            headerStyle: {
                backgroundColor: "#112acf",
            },
            headerTintColor: "#fff",
        }}>
            <Stack.Screen name='index' options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})