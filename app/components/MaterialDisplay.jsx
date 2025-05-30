// components/MaterialDisplay.jsx
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MaterialDisplay = ({ material }) => {
    if (!material || !material.contentBlocks || !Array.isArray(material.contentBlocks)) {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>Materi tidak tersedia atau tidak lengkap.</Text>
            </View>
        );
    }

    const renderBlock = (block, index) => {
        switch (block.type) {
            case 'heading':
                const headingStyle = [
                    styles.heading,
                    block.level === 1 && styles.h1,
                    block.level === 2 && styles.h2,
                    block.level === 3 && styles.h3,
                ];
                return (
                    <Text key={`heading-${index}`} style={headingStyle}>
                        {block.text}
                    </Text>
                );

            case 'paragraph':
                return (
                    <Text key={`paragraph-${index}`} style={styles.paragraph}>
                        {block.text}
                    </Text>
                );

            case 'image_suggestion':
                return (
                    <View key={`image-${index}`} style={styles.imageSuggestionContainer}>
                        <Icon name="image-outline" size={24} color="#757575" />
                        <Text style={styles.imageSuggestionText}>
                            (Ilustrasi: {block.description || "Gambar yang relevan"})
                        </Text>
                    </View>
                );

            case 'code_snippet':
                return (
                    <View key={`code-${index}`} style={styles.codeSnippetContainer}>
                        {(Array.isArray(block.code) ? block.code : [block.code || '']).map((line, lineIndex) => (
                            <Text key={`code-line-${lineIndex}`} style={styles.codeText}>
                                {line}
                            </Text>
                        ))}
                        {block.explanation && (
                            <Text style={styles.codeExplanation}>{block.explanation}</Text>
                        )}
                    </View>
                );

            case 'list':
                return (
                    <View key={`list-${index}`} style={styles.listContainer}>
                        {(block.items || []).map((item, itemIndex) => (
                            <View key={`list-item-${itemIndex}`} style={styles.listItem}>
                                <Text style={styles.listBullet}>
                                    {block.listType === 'numbered' ? `${itemIndex + 1}. ` : '• '}
                                </Text>
                                <Text style={styles.listItemText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                );

            case 'tip':
                return (
                    <View key={`tip-${index}`} style={styles.tipContainer}>
                        <Icon name="lightbulb-on-outline" size={20} color="#FFC107" style={{ marginRight: 8 }} />
                        <Text style={styles.tipText}>{block.text}</Text>
                    </View>
                );

            default:
                return (
                    <Text key={`unknown-${index}`} style={styles.paragraph}>
                        (Jenis blok tidak dikenal)
                    </Text>
                );
        }
    };

    return (
        <View style={styles.container}>
            {material.materialTitle && (
                <Text style={styles.mainTitle}>{material.materialTitle}</Text>
            )}
            {material.contentBlocks.map(renderBlock)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    mainTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1A237E',
        marginBottom: 15,
        textAlign: 'center',
    },
    heading: {
        fontWeight: 'bold',
        color: '#333',
        marginTop: 12,
        marginBottom: 6,
    },
    h1: { fontSize: 20 },
    h2: { fontSize: 18 },
    h3: { fontSize: 16 },
    paragraph: {
        fontSize: 16,
        color: '#424242',
        lineHeight: 24,
        marginBottom: 10,
    },
    imageSuggestionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    imageSuggestionText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#757575',
        fontStyle: 'italic',
    },
    codeSnippetContainer: {
        backgroundColor: '#263238',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
    },
    codeText: {
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
        color: '#ECEFF1',
        fontSize: 14,
        lineHeight: 20,
    },
    codeExplanation: {
        fontSize: 13,
        color: '#B0BEC5',
        fontStyle: 'italic',
        marginTop: 8,
    },
    listContainer: {
        marginVertical: 5,
        marginLeft: 10,
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 4,
        alignItems: 'flex-start',
    },
    listBullet: {
        marginRight: 8,
        fontSize: 16,
        color: '#424242',
        lineHeight: 24,
    },
    listItemText: {
        fontSize: 16,
        color: '#424242',
        flex: 1,
        lineHeight: 24,
    },
    tipContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFDE7',
        padding: 12,
        borderRadius: 8,
        marginVertical: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#FFC107',
    },
    tipText: {
        fontSize: 15,
        color: '#5D4037',
        flex: 1,
    },
});

export default MaterialDisplay;
