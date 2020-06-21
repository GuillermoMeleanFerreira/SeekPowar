import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'

import styles from './styles';
import Header from '../../Components/Header';

export default function SettingsScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#34368d"} barStyle='light-content' />
            <Header title='Título' />
        </View>
    );
} 