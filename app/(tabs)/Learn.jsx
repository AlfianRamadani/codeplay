import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const lessons = [
    {
        title: 'Asking for name',
        icon: { uri: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' },
        progressPercent: 20,
    },
    {
        title: 'Basics of Greetings',
        icon: { uri: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' },
        progressPercent: 40,
    },
    {
        title: 'Introducing Yourself',
        icon: { uri: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' },
        progressPercent: 60,
    },
    {
        title: 'Basic Vocabulary',
        icon: { uri: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' },
        progressPercent: 80,
    },
    {
        title: 'Common Phrases',
        icon: { uri: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' },
        progressPercent: 100,
    },
];

const Learn = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>CodePlay</Text>

            <View style={styles.chapterHeader}>
                <View style={styles.chapterInfo}>
                    <Text style={styles.chapterTitle}>Chapter 1</Text>
                    <Text style={styles.chapterSubtitle}>Introduction to Spanish</Text>
                </View>
                <AnimatedCircularProgress
                    size={50}
                    width={5}
                    fill={20}
                    tintColor="#521C0D"
                    backgroundColor="#eee"
                    rotation={0}
                    lineCap="round"
                >
                    {fill => <Text style={styles.progressPercent}>{`${Math.round(fill)}%`}</Text>}
                </AnimatedCircularProgress>
            </View>

            <View style={{ height: Dimensions.get('window').height - 250, paddingVertical: 20 }}>
                {lessons.map((lesson, index) => (
                    <View key={index} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AnimatedCircularProgress
                                size={46}
                                width={5}
                                // fill={Math.random() * 100}
                                fill={lesson.progressPercent}
                                tintColor="#F97A00"
                                backgroundColor="#eee"
                                rotation={0}
                                lineCap="round"
                            >
                                {fill =>
                                    <Ionicons
                                        name={fill === 100 ? "checkmark-circle" : "time-outline"}
                                        size={24}
                                        color="#F97A00"
                                    />
                                }
                            </AnimatedCircularProgress>
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        flex: 1,
                                        backgroundColor: '#fff',
                                        paddingVertical: 30,
                                        paddingHorizontal: 10,
                                        borderRadius: 8,
                                        marginLeft: 10,
                                        marginBottom: (pressed) ? 4 : 0,
                                        borderBottomWidth: (pressed) ? 0 : 4,
                                        borderBottomColor: '#ddd',
                                        borderRightWidth: (pressed) ? 0 : 1,
                                        borderRightColor: '#ddd',
                                        borderLeftColor: '#ddd',
                                        borderLeftWidth: (pressed) ? 0 : 1,
                                    }
                                ]}
                            >
                                <Text style={styles.labelText}>{lesson.title}</Text>
                            </Pressable>
                        </View>
                        {index < lessons.length - 1 && (
                            <View style={{
                                height: 30,
                                width: 2,
                                backgroundColor: '#ddd',
                                marginLeft: 23,
                            }} />
                        )}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Learn;

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2c3e50',
        alignSelf: 'center',
        marginBottom: 20,
    },
    chapterHeader: {
        backgroundColor: '#ff9800',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 20,
    },
    chapterTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    chapterSubtitle: {
        fontSize: 14,
        color: '#fff',
        marginTop: 4,
    },
    progressPercent: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    image: {
        width: 46,
        height: 46,
    },
    labelText: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: '600',
        color: '#000000',
    },
});