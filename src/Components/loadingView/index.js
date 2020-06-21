import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';

export default function LoadingView({ isModalVisible }) {

    return (
        <Modal isVisible={isModalVisible}>
            <ActivityIndicator />
        </Modal>
    );
}

const styles = StyleSheet.create({

})