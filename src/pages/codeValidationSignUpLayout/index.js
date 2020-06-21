/*
Concept: https://dribbble.com/shots/5476562-Forgot-Password-Verification/attachments
*/
import { Animated, Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { SkypeIndicator } from 'react-native-indicators';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles, {
    ACTIVE_CELL_BG_COLOR,
    CELL_BORDER_RADIUS,
    CELL_SIZE,
    DEFAULT_CELL_BG_COLOR,
    NOT_EMPTY_CELL_BG_COLOR,
} from './styles';

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 6;
// const source = {
//     uri:
//         'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
// };
import logoImg from '../../assets/logo.png';

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
    Animated.parallel([
        Animated.timing(animationsColor[index], {
            useNativeDriver: false,
            toValue: isFocused ? 1 : 0,
            duration: 250,
        }),
        Animated.spring(animationsScale[index], {
            useNativeDriver: false,
            toValue: hasValue ? 0 : 1,
            duration: hasValue ? 300 : 250,
        }),
    ]).start();
};


export default function AnimatedExample({ navigation }) {
    const [value, setValue] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [isTryingToLogin, setIsTryingToLogin] = useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const [recoveryCode, setRecoveryCode] = useState('')

    const route = useRoute();
    const firstLastName = route.params.firstLastName;
    const email = route.params.email;
    const mobileNumber = route.params.mobileNumber;
    const recoveryCodeReceived = route.params.recoveryCode;

    useEffect(() => {
        if (value.length == CELL_COUNT) {
            onSubmitHandler();
        }
    }, [value])

    useEffect(() => {
        setRecoveryCode(recoveryCodeReceived);
    }, [])

    useEffect(() => {
        setShowLoading(isTryingToLogin);
    }, [isTryingToLogin]);

    function navigateBack() {
        navigation.goBack();
    }
    function onSubmitHandler() {
        setIsTryingToLogin(true)
        if (recoveryCode == value) {
            navigation.navigate('SetPassword', { firstLastName, email, mobileNumber })
        } else {
            setValue(0);
        }
        setIsTryingToLogin(false)
    }

    const renderCell = ({ index, symbol, isFocused }) => {
        const hasValue = Boolean(symbol);
        const animatedCellStyle = {
            backgroundColor: hasValue
                ? animationsScale[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                })
                : animationsColor[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                }),
            borderRadius: animationsScale[index].interpolate({
                inputRange: [0, 1],
                outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
            }),
            transform: [
                {
                    scale: animationsScale[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.2, 1],
                    }),
                },
            ],
        };

        // Run animation on next event loop tik
        // Because we need first return new style prop and then animate this value
        setTimeout(() => {
            animateCell({ hasValue, index, isFocused });
        }, 0);

        return (
            <AnimatedText
                key={index}
                style={[styles.cell, animatedCellStyle]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
            </AnimatedText>
        );
    };

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="chevron-left" size={28} color={"#35398C"}></Feather>
                </TouchableOpacity>
            </View>

            {/* <View style={styles.circleContainer}>
                <Image style={styles.icon} source={source} />
            </View> */}
            <Image style={styles.logoImage} source={logoImg} />

            <Text style={styles.subTitle}>
                Introduza o código de verificação{'\n'}que enviamos para a sua caixa de correio
            </Text>

            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                renderCell={renderCell}
            />
            <TouchableOpacity
                style={styles.nextButton}
                onPress={onSubmitHandler}
            >
                {showLoading == true && <SkypeIndicator color={"white"} count={5} />}
                {showLoading == false && <Text style={styles.nextButtonText}>{'Verificar'}</Text>}
            </TouchableOpacity>
        </SafeAreaView>
    );
};