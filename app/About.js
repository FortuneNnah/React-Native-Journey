import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useState } from 'react'


const cards = [
    { image: 'https://images.unsplash.com/vector-1741061132292-a6b38b6778dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZyUyMGhpa2VzfGVufDB8fDB8fHww', title: 'Long hikes & adventures', description: 'High energy,  active outdoor companion' },
    { image: 'https://plus.unsplash.com/premium_vector-1723228575247-23af0b7b7400?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Cozy couch cuddles', description: 'Low energy, gentle, loves relaxation' },
    { image: 'https://images.unsplash.com/vector-1789106998095-4aa1d84f9a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFyayUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D', title: 'Park playdates', description: 'Very social, loves dogs and children' },
    { image: 'https://plus.unsplash.com/premium_vector-1721649515865-ca0220d8eab1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D', title: 'Backyard hangouts', description: 'Independent, content staying close to home' },
]
const About = () => {
    const [selectedCard, setSelectedCard] = useState(null)
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.head}>What does your perfect day with a cat look like?</Text>
                <View style={styles.cardsContainer}>
                    {cards.map((cards, index) => (
                        <Pressable
                            key={index}
                            onPress={() => setSelectedCard(index)}
                            style={[
                                styles.card, selectedCard === index && styles.selectedCard,
                            ]}
                        >
                            <Image source={{ uri: cards.image }} style={styles.image} />
                            <View style={styles.cardContent}>
                                <Text style={styles.cardTitle}>{cards.title}</Text>
                                <Text style={styles.cardDescription}>{cards.description}</Text>
                            </View>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fffbfb",
        flex: 1,
        alignItems: "center",
    },
    content: {
        flex: 1,
        fontFamily: 'sans-serif',
        paddingTop: 12,
        paddingHorizontal: 22,
    },
    head: {
        fontWeight: 700,
        fontSize: 26,
        LineHeight: 32,
        color: "#000",
        marginBottom: 20,
    },

    cardsContainer: {
        gap: 12,
    },

    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        gap: 12,
        padding: 12,
        paddingVertical: 18,
        borderRadius: 18,
        marginBottom: 16,
        overflow: 'hidden',
        elevation: 1,
        borderWidth: 1,
        borderColor: 'transparent',
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 8,

    },

    cardTitle: {
        fontWeight: 700,
        marginBottom: 3,
    },

    cardDescription: {
        color: '#555'
    },

    selectedCard: {
        borderColor: '#df8562',
    }

})