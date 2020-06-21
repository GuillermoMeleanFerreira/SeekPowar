import React, { useState } from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity, FlatList, ActivityIndicator, TouchableOpacityComponent } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import styles from './styles';

export default function ButtonNext({ disabled, textButton, onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={disabled ? styles.NextButtonDisabled : styles.NextButton} onPress={onPress}>
                <Text style={styles.textNextButton}>{textButton}</Text>
            </TouchableOpacity>
        </View>
    )
};