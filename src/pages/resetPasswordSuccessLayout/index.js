import React, { useState, useEffect } from 'react';
import styles from './styles';
import { Text, View, TouchableOpacity, Image, Animated } from 'react-native';

import logoImg from '../../assets/success.png';

export default function SignIn({ navigation }) {
    const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 500,
            }
        ).start();
    }, [fadeAnim])

    async function backToLogin() {
        navigation.goBack();
        navigation.goBack();
        navigation.goBack();
        navigation.goBack();
    }

    return (
        <Animated.View style={{
            opacity: fadeAnim,
            position: 'absolute',
            width: '100%',
            zIndex: 10,
            elevation: 10,
            height: '100%',
            backgroundColor: '#fff'
        }}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={logoImg} style={styles.logoImage}></Image>
                </View>
                <View style={styles.MessageContainer}>
                    <Text style={styles.title}>Sucesso!</Text>
                    <Text style={styles.subTitle}>Parabéns!! Conseguiu alterar a sua palavra-passe com sucesso.</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <TouchableOpacity
                        style={styles.signInButton}
                        onPress={backToLogin}>
                        <Text style={styles.signInButtonText}>{'Voltar para o início de sessão'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    );
}