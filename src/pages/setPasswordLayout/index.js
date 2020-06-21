import React, { useState, useEffect } from 'react';
import styles from './styles';
import Settings from '../../utils/settings';
import { Text, View, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import api from '../../services/api'
import { SkypeIndicator } from 'react-native-indicators';
import { useRoute } from '@react-navigation/native';

import { db_createUser } from '../../services/user'
import AlertView from '../../Components/modal';


import logoImg from '../../assets/logo.png';

export default function SignIn({ navigation }) {

    const [newPassword, setNewPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [isTryingToLogin, setIsTryingToLogin] = useState(false);

    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    const [showPasswordBar, setShowPasswordBar] = useState(false);
    const [showBadPasswordBar, setShowBadPasswordBar] = useState(false);
    const [showMediumPasswordBar, setShowMediumPasswordBar] = useState(false);
    const [showGoodPasswordBar, setShowGoodPasswordBar] = useState(false);

    const [showRepeatPasswordBar, setShowRepeatPasswordBar] = useState(false);
    const [showRepeatBadPasswordBar, setShowRepeatBadPasswordBar] = useState(false);
    const [showRepeatGoodPasswordBar, setShowRepeatGoodPasswordBar] = useState(false);

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const toggleModal = () => { setModalVisible(!isModalVisible); };

    function navigateBack() {
        navigation.goBack();
    }

    const route = useRoute();
    const firstLastName = route.params.firstLastName;
    const email = route.params.email;
    const mobileNumber = route.params.mobileNumber;

    async function _onSubmitNewPasswordHandler() {
        if (newPassword !== "" && repeatPassword !== "" && newPassword === repeatPassword) {
            setIsTryingToLogin(true)

            if (!showLoading) {
                Keyboard.dismiss()

                try {
                    var responseModel = await db_createUser(firstLastName, email, '', newPassword);

                    if (responseModel.Status == 401) {
                        console.log('clientID não é autorizado.')
                    } else if (responseModel.Status == 200) {

                        console.log(responseModel.ErrorMessage)

                        if (responseModel.ErrorMessage) {
                            setModalText(responseModel.ErrorMessage);
                        } else {
                            setModalText('Obrigado pela sua confiança. A sua conta foi criada com sucesso.');
                            //navigation.navigate('CodeValidationSignUpLayout', { firstLastName, email, mobileNumber, recoveryCode: 123456 });
                        }

                    } else {
                        setModalText('Erro ao apagar caso. Tente novamente.');
                    }

                } catch (ex) {
                    setModalText('Erro ao apagar caso. Tente novamente.');
                }

                toggleModal();
            }
            setIsTryingToLogin(false)
        }
    }

    useEffect(() => {
        setShowLoading(isTryingToLogin);
    }, [isTryingToLogin]);

    useEffect(() => {
        setShowBadPasswordBar(false)
        setShowMediumPasswordBar(false)
        setShowGoodPasswordBar(false)

        if (newPassword === '') {
            setShowBadPasswordBar(true)
        } else {
            if (strongRegex.test(newPassword)) {
                setShowGoodPasswordBar(true)
            } else if (mediumRegex.test(newPassword)) {
                setShowMediumPasswordBar(true)
            } else {
                setShowBadPasswordBar(true)
            }
        }

    }, [newPassword]);

    useEffect(() => {
        setShowRepeatBadPasswordBar(false)
        setShowRepeatGoodPasswordBar(false)

        if (repeatPassword === newPassword) {
            setShowRepeatGoodPasswordBar(true)
        } else {
            setShowRepeatBadPasswordBar(true)
        }

    }, [repeatPassword]);

    return (
        <View style={styles.container}>
            <AlertView isModalVisible={isModalVisible} modalText={modalText} toggleModal={toggleModal} />
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="chevron-left" size={28} color={"#35398C"}></Feather>
                </TouchableOpacity>
            </View>
            <View style={styles.MessageContainer}>
                <Image source={logoImg} style={styles.logoImage}></Image>
                <Text style={styles.enterTitle}>Introduza a sua palavra-passe</Text>
            </View>
            <View style={styles.inputsContainer}>
                {showPasswordBar && showBadPasswordBar && <View style={styles.stateBadPasswordBar}></View>}
                {showPasswordBar && showMediumPasswordBar && <View style={styles.stateMediumPasswordBar}></View>}
                {showPasswordBar && showGoodPasswordBar && <View style={styles.stateGoodPasswordBar}></View>}
                <View style={styles.searchSection}>
                    <Ionicons style={styles.searchIcon} name={'ios-lock'} size={20} />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setNewPassword(text)}
                        keyboardType='default'
                        placeholder="Nova palavra-passe"
                        value={newPassword}
                        onFocus={() => setShowPasswordBar(true)}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        returnKeyType={"next"}
                    />
                </View>
                {showRepeatPasswordBar && showRepeatBadPasswordBar && <View style={styles.stateBadPasswordBar}></View>}
                {showRepeatPasswordBar && showRepeatGoodPasswordBar && <View style={styles.stateGoodPasswordBar}></View>}
                <View style={styles.searchSection}>
                    <Ionicons style={styles.searchIcon} name={'ios-lock'} size={20} />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setRepeatPassword(text)}
                        keyboardType='email-address'
                        placeholder="Repita a nova palavra-passe"
                        onFocus={() => setShowRepeatPasswordBar(true)}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        value={repeatPassword}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={_onSubmitNewPasswordHandler}>
                    {showLoading == true && <SkypeIndicator color={"white"} count={5} />}
                    {showLoading == false && <Text style={styles.signInButtonText}>{'Registar'}</Text>}
                </TouchableOpacity>
            </View>
        </View>

    );
}