import { useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Leaderboard() {
    const [activeTab, setActiveTab] = useState('umum');

    // Data leaderboard untuk list di bawah podium
    const leaderboardDataUmum = [
        {
            id: 4,
            rank: 4,
            name: 'Alex',
            points: 1285,
            avatar: '../../assets/images/ALex.jpg',
        },
        {
            id: 5,
            rank: 5,
            name: 'Sarah',
            points: 1156,
            avatar: '../../assets/images/Sarah.jpg',
        },
        {
            id: 6,
            rank: 6,
            name: 'Michael',
            points: 1023,
            avatar: '../../assets/images/sigma.jpg',
        },
        {
            id: 7,
            rank: 7,
            name: 'Emma',
            points: 987,
            avatar: 'https://via.placeholder.com/40x40/FDCB6E/ffffff?text=E',
        },
        {
            id: 8,
            rank: 8,
            name: 'David',
            points: 854,
            avatar: 'https://via.placeholder.com/40x40/6C5CE7/ffffff?text=D',
        },
        {
            id: 9,
            rank: 150,
            name: 'David',
            points: 200,
            avatar: 'https://via.placeholder.com/40x40/6C5CE7/ffffff?text=D',
        },
    ];

    const leaderboardDataSekolah = [
        {
            id: 4,
            rank: 4,
            name: 'SMAN 2 Samarinda',
            points: 1285,
            avatar: 'https://via.placeholder.com/40x40/6C5CE7/ffffff?text=A',
        },
        {
            id: 5,
            rank: 5,
            name: 'SMAN 5 Balikpapan',
            points: 1156,
            avatar: 'https://via.placeholder.com/40x40/A29BFE/ffffff?text=S',
        },
        {
            id: 6,
            rank: 6,
            name: 'UNESA',
            points: 1023,
            avatar: 'https://via.placeholder.com/40x40/FD79A8/ffffff?text=M',
        },
        {
            id: 7,
            rank: 7,
            name: 'SMKN 1 Balikpapan',
            points: 987,
            avatar: 'https://via.placeholder.com/40x40/FDCB6E/ffffff?text=E',
        },
        {
            id: 8,
            rank: 8,
            name: 'SMAN 6 Balikpapan',
            points: 854,
            avatar: 'https://via.placeholder.com/40x40/6C5CE7/ffffff?text=D',
        },
        {
            id: 9,
            rank: 150,
            name: 'SDN 032 Samarinda',
            points: 200,
            avatar: 'https://via.placeholder.com/40x40/6C5CE7/ffffff?text=D',
        },
    ];

    // Header akan fixed, tidak perlu transform

    const getArrowIcon = (rank) => {
        return rank % 2 === 0 ? '▼' : '▲';
    };

    const getArrowColor = (rank) => {
        return rank % 2 === 0 ? '#E74C3C' : '#27AE60';
    };

    const renderLeaderboardItem = ({ item }) => (
        <View style={styles.leaderboardItem}>
            <View style={styles.leftSection}>
                <Text style={[styles.arrow, { color: getArrowColor(item.rank) }]}>
                    {getArrowIcon(item.rank)}
                </Text>
                <Text style={styles.rankNumberOther}>{item.rank}</Text>
                <View style={styles.avatarContainer}>
                    <Image source={{ uri: item.avatar }} style={styles.avatar} />
                </View>
                <Text style={styles.playerName}>{item.name}</Text>
            </View>
            <View style={styles.rightSection}>
                <Text style={styles.points}>{item.points} exp.</Text>
            </View>
        </View>
    );

    const renderTabContent = () => {
        if (activeTab === 'umum') {
            return (
                <View>
                    {/* Podium Section */}
                    <View style={styles.containerUmum}>
                        <View style={styles.rankTwoContainer}>
                            <Image source={require('../../assets/images/LeaderBoard-rank-2.png')} />
                            <View style={styles.rankText}>
                                <Text style={styles.rankName}>Vatani</Text>
                                <Text style={styles.rankNumber}>Level 3</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/LeaderBoard-rank-1.png')} />
                            <View style={styles.rankText}>
                                <Text style={styles.rankName}>Iman</Text>
                                <Text style={styles.rankNumber}>Level 32</Text>
                            </View>
                        </View>
                        <View style={styles.rankThirdContainer}>
                            <Image source={require('../../assets/images/LeaderBoard-rank-3.png')} />
                            <View style={styles.rankText}>
                                <Text style={styles.rankName}>Jonathan</Text>
                                <Text style={styles.rankNumber}>Level 84</Text>
                            </View>
                        </View>
                    </View>

                    {/* Leaderboard List Section */}
                    <View style={styles.leaderboardContainer}>
                        <FlatList
                            data={leaderboardDataUmum}
                            renderItem={renderLeaderboardItem}
                            keyExtractor={(item) => item.id.toString()}
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            );
        } else {
            return (
                <View>
                    {/* Podium Section */}
                    <View style={styles.containerUmum}>
                        <View style={styles.rankTwoContainer}>
                            <Image source={require('../../assets/images/LeaderBoardSchoolRank2.png')} />
                            <View style={styles.rankText}>
                                <Text style={styles.rankName}>SMK 2</Text>
                                <Text style={styles.rankNumber}>Level 86</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/LeaderBoardSchoolRank1.png')} />
                            <View style={styles.rankText}>
                                <Text style={styles.rankName}>UGM</Text>
                                <Text style={styles.rankNumber}>Level 90</Text>
                            </View>
                        </View>
                        <View style={styles.rankThirdContainer}>
                            <Image source={require('../../assets/images/LeaderBoardSchoolRank3.png')} />
                            <View style={styles.rankText}>
                                <Text style={styles.rankName}>SMK 6</Text>
                                <Text style={styles.rankNumber}>Level 84</Text>
                            </View>
                        </View>
                    </View>

                    {/* Leaderboard List Section */}
                    <View style={styles.leaderboardContainer}>
                        <FlatList
                            data={leaderboardDataSekolah}
                            renderItem={renderLeaderboardItem}
                            keyExtractor={(item) => item.id.toString()}
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            {/* Header Section - Fixed position */}
            <View
                style={[
                    styles.containerHeader,
                    {
                        zIndex: 1000,
                    }
                ]}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>Leaderboard</Text>
                </View>
            </View>
            {/* Header Section End */}

            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Spacer untuk memberikan ruang untuk header */}
                <View style={styles.headerSpacer} />

                {/* Tabs Section */}
                <View style={styles.tabContainer}>
                    <Pressable
                        style={[
                            styles.tabButton,
                            activeTab === 'umum' && styles.activeTabButton
                        ]}
                        onPress={() => setActiveTab('umum')}
                    >
                        <Text style={[
                            styles.tabText,
                            activeTab === 'umum' && styles.activeTabText
                        ]}>
                            Umum
                        </Text>
                    </Pressable>

                    <Pressable
                        style={[
                            styles.tabButton,
                            activeTab === 'sekolah' && styles.activeTabButton
                        ]}
                        onPress={() => setActiveTab('sekolah')}
                    >
                        <Text style={[
                            styles.tabText,
                            activeTab === 'sekolah' && styles.activeTabText
                        ]}>
                            Sekolah
                        </Text>
                    </Pressable>
                </View>
                {/* Tab Section End */}

                {/* Tab Content */}
                {renderTabContent()}
                {/* Tab Content End */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    // Header Section
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        flex: 1,
    },
    containerHeader: {
        position: 'absolute',
        left: 0,
        right: 0,
        paddingTop: 50,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerSpacer: {
        height: 120, // Berikan ruang untuk header
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7,
        transform: [{ scale: 0.95 }],
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
    },
    // Header Section End

    // Tab Section
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        gap: 10,
    },
    tabButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    activeTabButton: {
        backgroundColor: '#000',
        borderColor: '#000',
    },
    tabText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#666',
        textAlign: 'center',
    },
    activeTabText: {
        color: '#fff',
    },
    // Tab Section End

    // Umum Section
    containerUmum: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 25,
        marginBottom: 30,
    },
    rankTwoContainer: {
        marginTop: 70
    },
    rankThirdContainer: {
        marginTop: 70
    },
    rankName: {
        fontSize: 20,
        fontWeight: '500'
    },
    rankNumber: {
        fontSize: 15,
        marginTop: 10
    },
    rankText: {
        alignItems: 'center',
        marginTop: 20
    },
    // Umum Section End

    // Leaderboard List Section
    leaderboardContainer: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    leaderboardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    leaderboardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginVertical: 4,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    arrow: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 8,
    },
    rankNumberOther: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 12,
        minWidth: 20,
    },
    avatarContainer: {
        marginRight: 12,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#BDC3C7',
    },
    playerName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    rightSection: {
        alignItems: 'flex-end',
    },
    points: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666',
    },
    // Leaderboard List Section End

    // Sekolah Section
    sekolahContainer: {
        padding: 20,
        alignItems: 'center',
    },
    sekolahText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    sekolahSubtext: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    // Sekolah Section End

    // Content Section End
});