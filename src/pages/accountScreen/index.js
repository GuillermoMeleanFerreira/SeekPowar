import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StatusBar, FlatList, Platform } from 'react-native';
import styles from './styles';

export default function SettingsScreen({ navigation }) {

    return (
        <>

            <StatusBar backgroundColor={"#34368d"} barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>A sua Conta</Text>
            </View>

        </>
    );
}