import { StyleSheet, Text, View, Pressable} from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const Button = ({onPress, title}) => {
    return (
        <View>
            <Pressable style={styles.button} onPress={onPress} >
                <Text style={styles.buttonText}>{title} {<Ionicons size={15} name='arrow-forward-outline'/>}</Text>
            </Pressable>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: '#df8562',
        borderRadius: 999,
        paddingHorizontal: 18,
        paddingVertical: 16,
        marginTop: 28,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 3,
    },

    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '700',
        letterSpacing: 0.2,
        alignItems: 'center'
    },
})