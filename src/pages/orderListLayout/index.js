import React, { useEffect, useState, useRef } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'


const OrderListScreen = () => {

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Encomendas</Text>
            </View>
            <View style={styles.filterBar}>

            </View>

        </View>
    )
};




export default OrderListScreen;