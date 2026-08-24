import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Page</Text>

            <Link style={styles.link} href='/'>Home</Link>
            <Link style={styles.link} href='/Contact'>Contact section</Link>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        fontWeight: 700,
    },

    link: {
        textDecorationLine: "underline",
        margin: 20,
    }
})