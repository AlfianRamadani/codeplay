// Achievement.jsx
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/FontAwesome5';

const achievements = [
    {
        title: 'Studious',
        description: 'You have completed this lesson 10 times.',
        backgroundColor: '#66aed1',
        stars: 3,
        iconName: 'trophy',
    },
    {
        title: 'Quickie',
        description: 'You have completed this quiz in less than 3 minutes, 10 times.',
        backgroundColor: '#e8c131',
        stars: 4,
        iconName: 'stopwatch',
    },
    {
        title: 'Ambitious',
        description: 'You have achieved 15 milestones.',
        backgroundColor: '#5DB075',
        stars: 3,
        iconName: 'medal',
    },
    {
        title: 'Perfectionist',
        description: 'You have scored 100% on quizzes 20 times.',
        backgroundColor: '#3B5998',
        stars: 3,
        iconName: 'star',
    },
];

const Achievement = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Achievement</Text>

            <View style={styles.progressCard}>
                <AnimatedCircularProgress
                    size={80}
                    width={8}
                    fill={80}
                    tintColor="#4CAF50"
                    backgroundColor="#e0e0e0"
                    rotation={0}
                    lineCap="round"
                >
                    {fill => <Text style={styles.progressText}>{`${Math.round(fill)}%`}</Text>}
                </AnimatedCircularProgress>

                <View style={{ marginLeft: 15, flex: 1 }}>
                    <Text style={styles.totalText}>Total Achievements : 20</Text>
                    <Text style={styles.subText}>Great job, John! Complete your achievements now</Text>
                </View>
            </View>

            {achievements.map((item, index) => (
                <View key={index} style={[styles.achievementCard, { backgroundColor: item.backgroundColor }]}>
                    <Icon name={item.iconName} size={30} color="#fff" style={styles.icon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardDesc}>{item.description}</Text>
                    </View>
                    <View style={styles.stars}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Icon
                                key={i}
                                name="star"
                                solid
                                size={16}
                                color={i < item.stars ? '#FF9800' : '#ccc'}
                            />
                        ))}
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export default Achievement;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
    progressCard: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 14,
        color: '#444',
        marginTop: 4,
    },
    progressText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    achievementCard: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 12,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 12,
        textAlign: 'center',
    },
    textContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    cardDesc: {
        fontSize: 13,
        color: '#fff',
        marginTop: 4,
    },
    stars: {
        flexDirection: 'row',
        marginLeft: 10,
    },
});
