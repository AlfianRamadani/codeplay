import AsyncStorage from '@react-native-async-storage/async-storage';
import { materials as defaultMaterials } from '../data/quizData';
export const saveMaterialsToStorage = async (materials) => {
    try {
        const jsonValue = JSON.stringify(materials);
        await AsyncStorage.setItem('@materials', jsonValue);
    } catch (e) {
        console.error('❌ Error saving materials:', e);
    }
};
export const initializeMaterialsIfNeeded = async () => {
    try {
        const existingData = await AsyncStorage.getItem('@materials');
        if (!existingData) {
            await AsyncStorage.setItem('@materials', JSON.stringify(defaultMaterials));
            console.log('✅ Materials initialized and saved.');
        } else {
            console.log('ℹ️ Materials already exist. Skipping initialization.');
        }
    } catch (e) {
        console.error('❌ Error initializing materials:', e);
    }
};
export const updateStageStatus = async (stageId, newStatus) => {
    try {
        const materials = await loadMaterialsFromStorage();
        if (!materials) return;

        for (const material of materials) {
            for (const chapter of material.chapters) {
                for (const stage of chapter.stages) {
                    if (stage.id === stageId) {
                        stage.status = newStatus;
                    }
                }
            }
        }

        await saveMaterialsToStorage(materials);
        console.log(`✅ Status stage ${stageId} updated to ${newStatus}`);
    } catch (e) {
        console.error('❌ Error updating stage status:', e);
    }
};

export const loadMaterialsFromStorage = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@materials');
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error('❌ Error loading materials:', e);
        return [];
    }
};

