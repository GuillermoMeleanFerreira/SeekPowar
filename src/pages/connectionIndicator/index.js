import React, { useState, useEffect } from 'react';
import { Animated, View, Text, Image, TouchableOpacity, ShadowPropTypesIOS } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'

import styles from './styles';
import NetInfo from '@react-native-community/netinfo';
import logoImg from '../../assets/lost_connection.png'

export default function ConnectionIndicator() {

    const [isConnected, setIsConnected] = useState(true);
    const [isTryingToReconnect, setIsTryingToReconnect] = useState(false);

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

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
            setFadeAnim(new Animated.Value(0));
        });
        return () => unsubscribe();
    }, [isTryingToReconnect]);

    function tentarNovamente() {
        setIsTryingToReconnect(!isTryingToReconnect)
    }

    return (
        <>
            {!isConnected && (
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
                            <Image style={styles.Image} source={logoImg}>

                            </Image>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.Title}>Sem ligação à internet</Text>
                            <Text style={styles.Description}>
                                Não está ligado à internet. Garanta que tem o Wi-Fi ligado e o modo de avião desativado.
                            </Text>
                        </View>
                    </View>
                </Animated.View>
            )}
        </>
    )
}