import { useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../utils/Constant';

const achievements = [
    {
        title: 'Si Rajin',
        description: 'Menyelesaikan tugas selama 10 hari beruntut.',
        backgroundColor: '#66aed1',
        status: 'unlocked',
        iconName: 'book',
    },
    {
        title: 'Cepat Tepat',
        description: 'menyelesaikan kuis dengan cepat dan tepat dalam waktu 5 menit.',
        backgroundColor: '#e8c131',
        status: 'locked',
        iconName: 'stopwatch',
    },
    {
        title: 'Sang Pewujud',
        description: 'telah mencapai 15 milestone.',
        backgroundColor: '#5DB075',
        status: 'unlocked',
        iconName: 'medal',
    },
    {
        title: 'Sempurna',
        description: 'mendapat nilai 100% pada kuis sebanyak 20 kali.',
        backgroundColor: '#3B5998',
        status: 'locked',
        iconName: 'star',
    },
    {
        title: 'Pemula Hebat',
        description: 'Menyelesaikan 5 pelajaran pertama.',
        backgroundColor: '#9b59b6',
        status: 'unlocked',
        iconName: 'smileo',
    },
    {
        title: 'Jago Ngulang',
        description: 'Mengulang pelajaran yang sama 5 kali berturut-turut.',
        backgroundColor: '#e74c3c',
        status: 'locked',
        iconName: 'repeat',
    },
    {
        title: 'Konsisten',
        description: 'Belajar selama 7 hari berturut-turut.',
        backgroundColor: '#2ecc71',
        status: 'unlocked',
        iconName: 'calendar',
    },
    {
        title: 'Ahli Materi',
        description: 'Menyelesaikan semua pelajaran dalam satu kategori.',
        backgroundColor: '#1abc9c',
        status: 'locked',
        iconName: 'checkcircle',
    },
    {
        title: 'Pembelajar Cepat',
        description: 'Menyelesaikan 10 kuis dalam 1 jam dengan nilai di atas 90%.',
        backgroundColor: '#3498db',
        status: 'unlocked',
        iconName: 'rocket',
    },
    {
        title: 'Pahlawan Pagi',
        description: 'Menyelesaikan pelajaran sebelum jam 8 pagi 5 kali.',
        backgroundColor: '#f39c12',
        status: 'locked',
        iconName: 'sun',
    },
    {
        title: 'Penjelajah',
        description: 'Menyelesaikan semua kategori pelajaran tingkat dasar.',
        backgroundColor: '#3498db',
        status: 'unlocked',
        iconName: 'compass',
    },
    {
        title: 'Tak Kenal Lelah',
        description: 'Belajar selama 3 jam tanpa jeda.',
        backgroundColor: '#e74c3c',
        status: 'locked',
        iconName: 'battery-full',
    },
    {
        title: 'Sosial Learner',
        description: 'Berbagi pencapaian sebanyak 10 kali ke media sosial.',
        backgroundColor: '#3B5998',
        status: 'unlocked',
        iconName: 'share-alt',
    },
    {
        title: 'Kolektor Badge',
        description: 'Mengumpulkan 50 badge berbeda.',
        backgroundColor: '#f1c40f',
        status: 'locked',
        iconName: 'shield-alt',
    },
    {
        title: 'Master Quiz',
        description: 'Menjawab 100 pertanyaan tanpa kesalahan.',
        backgroundColor: '#2ecc71',
        status: 'unlocked',
        iconName: 'award',
    }
];

const Achievement = () => {
    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.mainContainer}>
            {/* Fixed Header */}
            <View style={styles.fixedHeader}>
                <Text style={styles.headerTitle}>Achievement</Text>
            </View>

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
            >
                {/* Spacer to account for fixed header */}
                <View style={styles.headerSpacer} />
                
                {/* Progress Card */}
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

                    <View style={styles.progressTextContainer}>
                        <Text style={styles.totalText}>Total Achievements : 20</Text>
                        <Text style={styles.subText}>Great job, John! Complete your achievements now</Text>
                    </View>
                </View>

                {/* Achievements List */}
                <View style={styles.achievementsList}>
                    {achievements.map((item, index) => (
                        <View 
                            key={index} 
                            style={[
                                styles.achievementCard, 
                                { 
                                    backgroundColor: item.backgroundColor,
                                    opacity: item.status === 'locked' ? 0.6 : 1
                                }
                            ]}
                        >
                            <Icon 
                                name={item.status === 'locked' ? 'lock' : item.iconName} 
                                size={30} 
                                color="#fff" 
                                style={styles.icon} 
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                                <Text style={styles.cardDesc}>{item.description}</Text>
                            </View>
                            <Icon
                                name={item.status === 'locked' ? 'lock' : 'unlock'}
                                size={20}
                                color="#fff"
                                style={styles.statusIcon}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.SOFT_WHITE,
    },
    fixedHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 120,
        backgroundColor: 'white',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 35,
        color: colors.DARK,
    },
    container: {
        flex: 1,
        marginTop: 130, // Height of fixed header
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    headerSpacer: {
        height: 10, // Small spacer below fixed header
    },
    progressCard: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    progressTextContainer: {
        marginLeft: 15,
        flex: 1,
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.DARK,
    },
    subText: {
        fontSize: 14,
        color: colors.GRAY,
        marginTop: 4,
    },
    progressText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.DARK,
    },
    achievementsList: {
        marginBottom: 20,
    },
    achievementCard: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
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
        opacity: 0.9,
    },
    statusIcon: {
        marginLeft: 8,
    },
});

export default Achievement;