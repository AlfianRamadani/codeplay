import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { materials } from '../data/quizData';
import { colors } from '../utils/Constant';

const Learn = () => {
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState(0);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const selectMaterial = (index) => {
        setSelectedMaterial(index);
        setShowDropdown(false);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={toggleDropdown}>
                    <Ionicons style={styles.materialsIcon} name="book" size={32} color="#2c3e50" />
                </Pressable>
                <Text style={styles.headerText}>CodePlay</Text>
                <View style={{ width: 32 }} />
            </View>

            <Modal
                visible={showDropdown}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowDropdown(false)}
            >
                <Pressable
                    style={styles.modalOverlay}
                    onPress={() => setShowDropdown(false)}
                >
                    <View style={styles.dropdown}>
                        <Text style={styles.headerText}>Pilih Materi</Text>
                        {materials.map((material, index) => (
                            <Pressable
                                key={index}
                                style={[styles.dropdownItem, selectedMaterial === index && styles.dropdownItemActive]}
                                onPress={() => selectMaterial(index)}
                            >
                                <Text style={styles.dropdownText}>
                                    {material.materialName}
                                </Text>
                                <Ionicons
                                    name={selectedMaterial === index ? "checkmark-circle" : "ellipse-outline"}
                                    size={24}
                                    color={selectedMaterial === index ? "#F97A00" : "#ccc"}
                                />
                            </Pressable>
                        ))}
                    </View>
                </Pressable>
            </Modal>

            <View style={{ gap: 40 }}>
                {materials[selectedMaterial].chapters.map((chapter, index) => (
                    <View key={index}>
                        <View style={styles.chapterHeader}>
                            <View style={styles.chapterInfo}>
                                <Text style={styles.chapterTitle}>Chapter {chapter.id}</Text>
                                <Text style={styles.chapterSubtitle}>{chapter.chapterName}</Text>
                            </View>
                            <AnimatedCircularProgress
                                size={50}
                                width={5}
                                fill={0}
                                tintColor={colors.BLACK}
                                backgroundColor="#ddd"
                                rotation={0}
                                lineCap="round"
                            >
                                {fill => <Text style={styles.progressPercent}>{`${Math.round(fill)}%`}</Text>}
                            </AnimatedCircularProgress>
                        </View>

                        <View style={{ paddingVertical: 20 }}>
                            {chapter.stages.map((stage, stageIndex) => (
                                <View key={stageIndex}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <AnimatedCircularProgress
                                            size={46}
                                            width={5}
                                            // fill={Math.random() > 0.4 ? 100 : Math.random() * 80}
                                            tintColor={colors.PRIMARY}
                                            backgroundColor="#ddd"
                                            rotation={0}
                                            lineCap="round"
                                        >
                                            {fill =>
                                                <Ionicons
                                                    name={fill === 100 ? "checkmark-circle" : "time-outline"}
                                                    size={24}
                                                    color={fill === 100 ? colors.PRIMARY : colors.MUTED}
                                                />
                                            }
                                        </AnimatedCircularProgress>
                                        <Pressable
                                            onPress={() => {
                                                router.push({
                                                    pathname: '/page/Question',
                                                    params: {
                                                        quizPlayQuestions: JSON.stringify(stage.questions),
                                                        isHaveMaterial: true,
                                                    }
                                                });
                                            }}
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
                            ))}
                        </View>
                    </View>
                ))}
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    materialsIcon: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2c3e50',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    // Dropdown styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-start',
    },
    dropdown: {
        backgroundColor: 'white',
        paddingTop: 50,
    },
    dropdownItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropdownItemActive: {
        backgroundColor: '#f0f0f0',
    },
    dropdownText: {
        fontSize: 16,
        fontWeight: '500'
    },
    chapterHeader: {
        backgroundColor: colors.PRIMARY,
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
        fontSize: 12,
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