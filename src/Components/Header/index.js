import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'

import styles from './styles';


export default function Header({ title }) {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#34368d"} barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{title}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                    <Ionicons style={styles.cartIcon} name={'ios-cart'} size={35} color={'#e7e8ea'} />
                </TouchableOpacity>
            </View>
        </View>
    );
}