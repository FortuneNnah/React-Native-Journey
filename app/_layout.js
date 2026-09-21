import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack style={styles.container} screenOptions={{
            headerStyle: {
                backgroundColor: "#df8562",
                elevation: 0,
                shadowOpacity: 0,
            },
            bodyStyle: {
                backgroundColor: "#f8e2d0",
            },
            headerTintColor: "#fff",
        }}>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='About' options={{ headerTitle: "" }} />
            <Stack.Screen name='Contact' options={{ headerTitle: false }} />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})