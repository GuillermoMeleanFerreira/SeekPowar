import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';

export default function AlertView({ isModalVisible, modalText, toggleModal, twoOptions, twoOptionText, firstMethod, secondMethod, isJustLoading }) {

    return (
        <Modal isVisible={isModalVisible}>
            {isJustLoading &&
                <ActivityIndicator />
            }

            {!isJustLoading && twoOptions ?
                <View style={styles.cardModalContainerTOP}>
                    <View style={styles.titleModalContainer}>
                        <Text style={styles.errorMessageText}>
                            {modalText}
                        </Text>
                    </View>
                    <View style={styles.buttonModalContainerTOP}>
                        <TouchableOpacity
                            onPress={firstMethod}
                            style={styles.buttonModalTOP}>
                            <Text style={styles.acceptMessageButton}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonModalContainer}>
                        <TouchableOpacity
                            onPress={secondMethod}
                            style={styles.buttonModal}>
                            <Text style={styles.cancelMessageButton}>{twoOptionText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                :
                <View style={styles.cardModalContainer}>
                    <View style={styles.titleModalContainer}>
                        <Text style={styles.errorMessageText}>
                            {modalText}
                        </Text>
                    </View>
                    <View style={styles.buttonModalContainer}>
                        <TouchableOpacity
                            onPress={toggleModal}
                            style={styles.buttonModal}>
                            <Text style={styles.acceptMessageButton}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            }

        </Modal>
    );
}

const styles = StyleSheet.create({
    /// Modal
    cardModalContainer: {
        height: 122.5,
        backgroundColor: 'grey',
        marginTop: 'auto',
        marginBottom: 'auto',
        borderRadius: 10
    },
    titleModalContainer: {
        flex: 0.6,
        backgroundColor: 'rgb(28, 28, 30)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 10
    },

    buttonModalContainer: {
        flex: 0.4,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 1
    },

    errorMessageText: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: Platform.OS === 'ios' ? 22 : 16,
        marginVertical: 1,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: '500'
    },

    acceptMessageButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: Platform.OS === 'ios' ? 18 : 14,
        marginVertical: 1,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: '600'
    },

    cancelMessageButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: Platform.OS === 'ios' ? 18 : 14,
        marginVertical: 1,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: '600'
    },

    buttonModal: {
        backgroundColor: 'rgb(28, 28, 30)',
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },



    // Two Options

    cardModalContainerTOP: {
        height: 175,
        backgroundColor: 'grey',
        marginTop: 'auto',
        marginBottom: 'auto',
        borderRadius: 10
    },

    buttonModalContainerTOP: {
        flex: 0.4,
        marginTop: 1
    },

    buttonModalTOP: {
        backgroundColor: 'rgb(28, 28, 30)',
        flex: 1,
    },
})