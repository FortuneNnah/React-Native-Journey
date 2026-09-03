import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'


const AuthLayout = () => {
    return (
        <>
            <StatusBar style='auto' />
            <Stack>
                <Stack.Screen name='signin' options={{ headerShown: false, animation: 'slide_from_left' }} />
                <Stack.Screen name='login' options={{ title: 'Login', animation: 'slide_from_right' }} />
            </Stack>
        </>
    )
}

export default AuthLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})