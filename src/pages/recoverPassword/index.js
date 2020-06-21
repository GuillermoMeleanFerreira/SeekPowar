import React, { useState, useEffect } from 'react';
import styles from './styles';
import { Text, View, TextInput, TouchableOpacity, Image, Keyboard, Platform } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import api from '../../services/api'
import { useRoute } from '@react-navigation/native';
import { SkypeIndicator } from 'react-native-indicators';
import logoImg from '../../assets/logo.png';
import Modal from 'react-native-modal';


export default function RecoverPassword({ navigation }) {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [isTryingToLogin, setIsTryingToLogin] = useState(false);
    const [requestNumber, setRequestNumber] = useState(0);
    const [canSubmitForm, setCanSubmitForm] = useState(false);

    var emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const route = useRoute();
    const emailReceived = route.params.email;
    useEffect(() => {
        setEmail(emailReceived);
    }, [])

    function navigateBack() {
        navigation.goBack();
    }

    useEffect(() => {
        if (errorMessage) {
            alert(errorMessage)
        }
    }, [errorMessage]);

    useEffect(() => {
        setShowLoading(isTryingToLogin);
    }, [isTryingToLogin]);

    useEffect(() => {
        if (emailRegex.test(email)) {
            setCanSubmitForm(true);
        } else {
            setCanSubmitForm(false);
        }
    }, [email]);

    async function _onRecoverPasswordHandler() {
        if (email != "") {
            if (!validateEmail(email)) {
                setModalText('Introduza um e-mail válido');
                toggleModal()
            } else {
                setIsTryingToLogin(true)
                if (!showLoading && requestNumber < 3) {

                    Keyboard.dismiss()
                    var body = {
                        email: email,
                        clientID: "1"
                    }

                    var response = await api.post('User/recoverPassword.php', body);

                    setRequestNumber(requestNumber + 1)

                    if (response.data.ErrorResponse) {
                        setModalText(response.data.ErrorResponse);
                        toggleModal()
                    } else {
                        var recoveryCode = response.data.recoveryCode
                        var userID = response.data.userID
                        navigation.navigate('CodeValidationResetPasswordLayout', { recoveryCode, userID });
                    }
                }

                setIsTryingToLogin(false)
            }
        } else {
            setModalText('Introduza um e-mail válido');
            toggleModal()
        }
    }

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <Modal isVisible={isModalVisible}>
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
            </Modal>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="chevron-left" size={28} color={"#35398C"}></Feather>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image source={logoImg} style={styles.logoImage} />
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.enterTitle}>Introduza o seu e-mail</Text>
            </View>

            {!emailSent &&
                <>
                    <View style={styles.inputsContainer}>

                        <View style={styles.searchSection}>
                            <Ionicons style={styles.searchIcon} name={'ios-mail'} size={20} />
                            <TextInput
                                style={styles.input}
                                onChangeText={email => setEmail(email)}
                                keyboardType='email-address'
                                placeholder="E-mail"
                                value={email}
                                autoCapitalize='none'
                            />
                        </View>

                        {canSubmitForm && <TouchableOpacity
                            style={styles.signInButton}
                            onPress={_onRecoverPasswordHandler}>
                            {showLoading == true && <SkypeIndicator color={"white"} count={5} />}
                            {showLoading == false && <Text style={styles.signInButtonText}>{'Enviar código'}</Text>}
                        </TouchableOpacity>}

                        {!canSubmitForm && <TouchableOpacity
                            style={styles.signInButtonDisabled}>
                            {showLoading == true && <SkypeIndicator color={"white"} count={5} />}
                            {showLoading == false && <Text style={styles.signInButtonText}>{'Enviar código'}</Text>}
                        </TouchableOpacity>}
                    </View>
                </>
            }
        </View>
    );
}