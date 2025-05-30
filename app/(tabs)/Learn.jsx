import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { materials } from '../data/quizData';


const Learn = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>CodePlay</Text>
            <View style={{ gap: 40 }}>
                {materials[0].chapters.map((chapter, index) => (
                    <View key={index}>
                        <View style={styles.chapterHeader}>
                            <View style={styles.chapterInfo}>
                                <Text style={styles.chapterTitle}>Chapter {chapter.id}</Text>
                                <Text style={styles.chapterSubtitle}>{chapter.chapterName}</Text>
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
                        </View >
                        <View style={{ paddingVertical: 20 }}>
                            {
                                chapter.stages.map((stage, stageIndex) => (
                                    <View key={stageIndex} >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <AnimatedCircularProgress
                                                size={46}
                                                width={5}
                                                // fill={Math.random() * 100}
                                                fill={100}
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
                                                <Text style={styles.labelText}>{stage.stageName}</Text>
                                            </Pressable>
                                        </View>
                                        {stageIndex < chapter.stages.length - 1 && (
                                            <View style={{
                                                height: 30,
                                                width: 2,
                                                backgroundColor: '#ddd',
                                                marginLeft: 23,
                                            }} />
                                        )}
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                ))
                }
            </View>
        </ScrollView>
    );
};

export default Learn;

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
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