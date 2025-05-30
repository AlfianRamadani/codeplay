import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* Fixed Header */}
            <View style={styles.containerHeader}>
                <View style={styles.header}>

                    <Text style={styles.title}>My Profile</Text>
                    
                </View>
            </View>

            {/* Scrollable Content */}
            <ScrollView style={styles.scrollContent} contentContainerStyle={styles.scrollContainer}>
                <Image source={require('@/assets/images/profile-tab-background.png')} style={styles.backgroundImage} />
                
                {/* Profile Section */}
                <View style={styles.profileContainer}>
                    <View style={styles.profileCard}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.editButton,
                                pressed && styles.pressedEdit
                            ]}
                        >
                            <Ionicons name="create-outline" size={24} color="#333" />
                        </Pressable>

                        <View style={styles.profileContent}>
                            <View style={styles.avatarContainer}>
                                <Image
                                    source={{
                                        uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
                                    }}
                                    style={styles.avatar}
                                />
                            </View>

                            <View style={styles.profileInfo}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.status}>Newbie</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Stats Section */}
                <View style={styles.containerStats}>
                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>2+ hours</Text>
                            <Text style={styles.statLabel}>Total Learn</Text>
                        </View>

                        <View style={styles.separator} />

                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>20</Text>
                            <Text style={styles.statLabel}>Achievements</Text>
                        </View>

                        <View style={styles.separator} />

                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>2</Text>
                            <Text style={styles.statLabel}>Language</Text>
                        </View>
                    </View>
                </View>

                {/* Dashboard Section */}
                <View style={styles.parentDashboard}>
                    <View style={styles.containerDashboard}>
                        <Text style={styles.DashboardTitle}>Dashboard</Text>

                        <View style={styles.SettingContainerSection}>
                            <View style={styles.SettingIconContainer}>
                                <Ionicons name="settings-outline" size={24} color="#333" />
                            </View>
                            <Text style={styles.SettingSectionText}>Settings</Text>
                            <View style={styles.SettingArrowIcon}>
                                <Ionicons name="caret-forward-outline" size={24} color="#333" />
                            </View>
                        </View>

                        <View style={styles.AchievmentContainerSection}>
                            <View style={styles.AchievmentIconContainer}>
                                <Ionicons name="trophy-outline" size={24} color="#333" />
                            </View>
                            <Text style={styles.AchievmentSectionText}>Achievment</Text>
                            <View style={styles.AchievmentArrowIcon}>
                                <Text style={styles.AchievmentArrowText}>2 New</Text>
                                <Ionicons name="caret-forward-outline" size={24} color="#333" />
                            </View>
                        </View>

                        <View style={styles.PrivacyContainerSection}>
                            <View style={styles.PrivacyIconContainer}>
                                <Ionicons name="lock-closed-outline" size={24} color="#333" />
                            </View>
                            <Text style={styles.PrivacySectionText}>Privacy</Text>
                            <View style={styles.PrivacyArrowIcon}>
                                <Text style={styles.PrivacyArrowText}>Action Needed</Text>
                                <Ionicons name="caret-forward-outline" size={24} color="#333" />
                            </View>
                        </View>
                    </View>
                </View>

                {/* MyAccount Section */}
                <View style={styles.parentMyAccount}>
                    <View style={styles.containerMyAccount}>
                        <Text style={styles.myAccountText}>My Account</Text>
                        <Text style={styles.myAccountSwitchText}>Switch to Another Account</Text>
                        <Pressable
                            style={({ pressed }) => [
                                styles.logoutButton,
                                pressed && styles.pressed
                            ]}
                            onPress={() => {
                                router.push('../page/Start');
                            }}
                        >
                            <Text style={styles.myAccountLogOutText}>Logout Account</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    // Main Container
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    // Fixed Header
    containerHeader: {
        backgroundColor: '#f5f5f5',
        paddingTop: 50,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        zIndex: 1000,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
    },

    // Scrollable Content
    scrollContent: {
        flex: 1,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    backgroundImage: {
        width: 400,
        height: 250,
        position: 'absolute',
        top: 0,
    },

    // Profile Section
    profileContainer: {
        paddingHorizontal: 20,
        marginTop: 55,
    },
    profileCard: {
        borderRadius: 16,
        padding: 20,
        position: 'relative',
    },
    editButton: {
        position: 'absolute',
        top: 38,
        right: 20,
        zIndex: 1,
        padding: 8,
    },
    pressedEdit: {
        opacity: 0.7,
        transform: [{ scale: 0.95 }],
    },
    pressed: {
        opacity: 0.7,
        transform: [{ scale: 0.95 }],
    },
    profileContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        marginRight: 16,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#e0e0e0',
    },
    profileInfo: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    status: {
        fontSize: 14,
        color: '#999',
    },

    // Stats Section
    containerStats: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 40,
        borderRadius: 12,
        borderTopWidth: 0.3,
        borderTopColor: 'black',
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
    },
    statNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    separator: {
        width: 1,
        height: 45,
        backgroundColor: 'black',
        marginHorizontal: 8,
    },

    // Dashboard Section
    parentDashboard: {
        paddingHorizontal: 20,
    },
    containerDashboard: {
        paddingHorizontal: 18,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 15
    },
    DashboardTitle: {
        marginBottom: 20,
    },

    // Settings Section
    SettingContainerSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 10
    },
    SettingIconContainer: {
        padding: 8,
        marginRight: 25,
        backgroundColor: '#3DB2FF',
        borderRadius: 50
    },
    SettingSectionText: {
        fontWeight: '500',
        fontSize: 15
    },
    SettingArrowIcon: {
        marginLeft: 'auto'
    },

    // Achievements Section
    AchievmentContainerSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 10
    },
    AchievmentIconContainer: {
        padding: 8,
        marginRight: 25,
        backgroundColor: '#F1C40F',
        borderRadius: 50
    },
    AchievmentSectionText: {
        fontWeight: '500',
        fontSize: 15,
    },
    AchievmentArrowText: {
        color: 'white',
        fontSize: 12,
        marginRight: 5,
    },
    AchievmentArrowIcon: {
        marginLeft: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: '#3870FF'
    },

    // Privacy Section
    PrivacyContainerSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    PrivacyIconContainer: {
        padding: 8,
        marginRight: 25,
        backgroundColor: 'gray',
        marginBottom: 20,
        borderRadius: 50
    },
    PrivacySectionText: {
        fontWeight: '500',
        fontSize: 15,
        bottom: 10
    },
    PrivacyArrowText: {
        color: 'white',
        fontSize: 12,
        marginRight: 5
    },
    PrivacyArrowIcon: {
        marginLeft: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: '#FF683A',
        bottom: 10
    },

    // MyAccount Section
    parentMyAccount: {
        paddingHorizontal: 20,
        marginTop: 30,
        marginBottom: 30
    },
    myAccountText: {
        marginBottom: 20,
    },
    myAccountSwitchText: {
        marginBottom: 20,
        color: '#3E5FAF',
        fontWeight: '500'
    },
    myAccountLogOutText: {
        marginBottom: 20,
        color: '#FB6D64',
        fontWeight: '500'
    },
    containerMyAccount: {
        paddingHorizontal: 18,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 15
    },
});