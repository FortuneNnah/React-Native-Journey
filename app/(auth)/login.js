import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Pressable,
    useWindowDimensions,
}
    from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'


const Login = () => {
    const navigation = useNavigation();
    const dimensions = useWindowDimensions();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleButton = () => {
        navigation.navigate('register')
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f3fa' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://images.unsplash.com/vector-1759412736247-427d9a325079?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                        alt='logo'
                    />
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtext}>Sign Up to get started with your dashboard</Text>
                </View>

                <View styles={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Full Name</Text>

                        <TextInput
                            style={styles.inputControl}
                            placeholder='Enter your name'
                            value={form.name}
                            onChange={name => setForm({ ...form, name })}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Email Address</Text>

                        <TextInput
                            style={styles.inputControl}
                            placeholder='Enter your email'
                            value={form.email}
                            onChange={email => setForm({ ...form, email })}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Password</Text>

                        <TextInput
                            secureTextEntry
                            style={styles.inputControl}
                            placeholder='***********'
                            value={form.password}
                            onChange={password => setForm({ ...form, password })}
                        />
                    </View>

                    <Pressable
                        style={styles.button}
                    >
                        <Text style={styles.text}>Get Started</Text>
                    </Pressable>

                    <Text style={styles.or}> Or</Text>

                    <Pressable
                        style={styles.button}
                        onPress={handleButton}
                    >
                        <Text style={styles.signin}>Sign In</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        fontFamily: '',
        padding: 24,
        flex: 1,
    },

    header: {
        marginVertical: 36,
    },

    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 80,
        marginBottom: 20,
    },

    title: {
        fontSize: 27,
        fontWeight: 700,
        letterSpacing: 1.2,
        color: '#1e1e1e',
        alignSelf: 'center'
    },

    subtext: {
        fontSize: 15,
        color: '#929292',
        textAlign: 'center',
    },

    input: {
        marginBottom: 16,
    },

    inputLabel: {
        fontSize: 15,
        fontWeight: 600,
        color: '#222',
        paddingBottom: 5,
    },

    inputControl: {
        backgroundColor: '#fff',
        height: 44,
        borderRadius: 10,
        paddingHorizontal: 16,
        borderColor: '#d7d5d5',
        borderWidth: 0.5,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffaebb',
        flexDirection: 'row',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 8,
        textAlign: 'center',
    },

    or:{
        alignSelf: 'center',
        padding: 10,
    },

    signin: {
        alignSelf: 'center',

    },

})