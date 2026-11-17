import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
    const [name, setName] = useState("Naidyuk Stas");
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://example.com/profile.jpg" }} style={styles.avatar} />
            <Text style={styles.title}>About Me</Text>
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Email: {name}@gmail.com</Text>
            <Text style={styles.text}>Phone: +380681432805</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    avatar:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 20,
    },
    title: {
        textAlign: 'center',
        fontSize:24,
        fontWeight: 'bold',
    },
    text: { 
        fontSize: 18, 
        marginTop: 10 
    }
}
)