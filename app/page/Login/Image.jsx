import { Image, StyleSheet, View } from 'react-native'

export default function ImageSection() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/CodePlay-Login-Image.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "10%"
    }
})