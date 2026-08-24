import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#ff9a1f",
            },
            headerTintColor: "#fff",
        }}>
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />

            <Stack.Screen name='index' options={{ title: 'Home' }} />
            <Stack.Screen name='About' options={{ title: 'About Us' }} />
            <Stack.Screen name='Contact' options={{ title: 'Contact Us' }} />


        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})