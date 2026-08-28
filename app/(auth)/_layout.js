import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'


const AuthLayout = () => {
    return (
        <>
            <StatusBar style='auto' />
            <Stack screenOptions = {{ }}>
                <Stack.Screen name='register' options={{title: 'Register'}} />
                <Stack.Screen name='login' options={{headerShown: false}} />
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