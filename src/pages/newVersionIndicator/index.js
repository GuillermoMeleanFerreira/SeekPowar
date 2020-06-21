import React, { useState, useEffect } from 'react';
import { View, Text, Image, AppState, TouchableOpacity, BackHandler } from 'react-native';

import NetInfo from '@react-native-community/netinfo';
// import { checkLatestVersion } from '../../services/users' 

import { version } from '../../../package.json'
import styles from './styles';

import logoImg from '../../assets/rocket_newUpdate2.png';

function NewVersionIndicator({ newVersionHandler }) {

    const [latest, setLatest] = useState(true);

    useEffect(() => {
        if (AppState.currentState == 'active') {
            checkVersion(version)
        }
        AppState.addEventListener('change', nextAppState => {
            if (nextAppState == 'active') {
                checkVersion(version)
            }
        });

        const unsubscribe = NetInfo.addEventListener(state => {
            if (state.isConnected) {
                checkVersion(version)
            }
        });
        return () => unsubscribe();

    }, []);

    async function checkVersion(v) {
        // let res = await checkLatestVersion(v)
        setLatest(true)
        newVersionHandler(true)
    }
    return (
        <>
            {!latest && <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.Image} source={logoImg}>

                    </Image>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.Title}>Nova versão disponível</Text>
                    <Text style={styles.Description}>
                        A versão corrente desta aplicação não é mais suportada. Pedimos imensa desculpa por qualquer inconveniência que lhe possamos ter causado.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.upgradeButton}
                        onPress={() => { }}
                    >
                        <Text style={styles.buttonText}>Faça a atualização agora</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.noThanksButton}
                        onPress={() => BackHandler.exitApp()}
                    >
                        <Text style={styles.buttonTextNoThanks}>Não, obrigado. Fechar a aplicação.</Text>
                    </TouchableOpacity>
                </View>
            </View>}
        </>
    );
}

export default NewVersionIndicator;
