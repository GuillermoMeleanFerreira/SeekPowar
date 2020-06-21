import React, { useState, useEffect } from 'react'
import { Animated, Text, View, Image, AsyncStorage } from 'react-native'
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png';
import { useNavigation } from "react-navigation-hooks";

const FadeInImage = (props) => {
    const [flexAnim] = useState(new Animated.Value(1))  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            flexAnim,
            {
                toValue: 0.4,
                duration: 1500,
            }
        ).start();
    }, [])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                flex: flexAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

const FadeInText = (props) => {
    const [flexAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0
    const [opacityAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            flexAnim,
            {
                toValue: 0.2,
                duration: 1500,
            }
        ).start();
    }, [])

    useEffect(() => {
        Animated.timing(
            opacityAnim,
            {
                toValue: 1,
                duration: 2500,
            }
        ).start();
    }, [])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                flex: flexAnim,
                opacity: opacityAnim
            }}
        >
            {props.children}
        </Animated.View>
    );
}

const FadeInButtons = (props) => {
    const [flexAnim] = useState(new Animated.Value(0))
    const [opacityAnim] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            flexAnim,
            {
                toValue: 0.4,
                duration: 1500,
            }
        ).start();
    }, [])

    useEffect(() => {
        Animated.timing(
            opacityAnim,
            {
                toValue: 1,
                duration: 1500,
            }
        ).start();
    }, [])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                flex: flexAnim,
                opacity: opacityAnim
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default function HomeLogin({ navigation }) {
    const { navigate } = useNavigation();

    function navigateToSignIn() {
        navigation.navigate('SignIn');
    }

    function navigateToSignUp() {
        navigation.navigate('SignUp');
    }

    async function checkLogin() {
        try {
            var value = await AsyncStorage.getItem('@email-logged');
            if (value != null) {
                navigate('App')
            }
        } catch (error) {
        }
    }

    checkLogin();

    return (
        <View style={styles.container}>
            <FadeInImage style={styles.imageContainer}>
                <Image
                    style={styles.logoImage}
                    source={logoImg}>
                </Image>
            </FadeInImage>

            <FadeInText style={styles.textContainer}>
                <Text style={styles.Welcome}>
                    Bem-vindo
                </Text>
                <Text style={styles.WelcomeMessage}>
                    Poderá fazer encomendas e ter o seu talho à distância de um toque
                </Text>
            </FadeInText>

            <FadeInButtons style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={navigateToSignIn}
                >
                    <Text style={styles.buttonText}>{'Iniciar sessão'}</Text>
                    <Feather style={styles.arrorRight} name="arrow-right" size={25} color={'#fff'}></Feather>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.signUpGrey}
                    onPress={navigateToSignUp}
                >
                    <Text style={styles.buttonText}>{'Iniciar sessão com cartão de sócio'}</Text>
                    <Feather style={styles.arrorRight} name="arrow-right" size={25} color={'#fff'}></Feather>
                </TouchableOpacity> */}
                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={navigateToSignUp}
                >
                    <Text style={styles.buttonText}>{'Não tem conta? Registe-se'}</Text>
                    <Feather style={styles.arrorRight} name="arrow-right" size={25} color={'#fff'}></Feather>
                </TouchableOpacity>

            </FadeInButtons>
        </View>
    )
}