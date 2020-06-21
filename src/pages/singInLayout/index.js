import React, { useState, useEffect } from 'react';
import styles from './styles';
import { Text, View, TextInput, TouchableOpacity, Image, Keyboard, AsyncStorage } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import api from '../../services/api'
import { SkypeIndicator } from 'react-native-indicators';
import { useNavigation } from "react-navigation-hooks";
import logoImg from '../../assets/logo.png';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

export default function SignIn({ navigation }) {
    const { navigate } = useNavigation();

    var emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [isTryingToLogin, setIsTryingToLogin] = useState(false);
    const [canSubmitForm, setCanSubmitForm] = useState(false);

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToRecoverPassword() {
        navigation.navigate('RecoverPassword', { email })
    }

    useEffect(() => {
        if (emailRegex.test(email) && password != "") {
            setCanSubmitForm(true);
        } else {
            setCanSubmitForm(false);
        }
    }, [email, password]);

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    async function _onLoginHandler() {
        if (password != "" && emailRegex.test(email)) {
            setIsTryingToLogin(true)

            if (!showLoading) {
                Keyboard.dismiss()

                var headers = { 'Content-Type': 'application/json;charset=UTF-8', 'clientID': 1 }

                var body = {
                    email: email,
                    password: password
                }

                var response = await api.post('User/login.php', body, {
                    headers: headers
                });

                if (response.data.ErrorResponse) {
                    setModalText("E-mail ou palava-passe incorretos.\nTente Novamente.");
                    toggleModal()
                } else {
                    saveCredentials(email, response.data.UserID, password);
                    navigate('App')
                }
            }

            setIsTryingToLogin(false)
        }
    }

    async function saveCredentials(emailLogged, userIDLogged, passwordLogged) {
        try {
            await AsyncStorage.setItem(
                '@email-logged',
                emailLogged
            );
            await AsyncStorage.setItem(
                '@userID-logged',
                userIDLogged
            );
            await AsyncStorage.setItem(
                '@password-logged',
                passwordLogged
            );
        } catch (error) {

        }
    };

    useEffect(() => {
        setShowLoading(isTryingToLogin);
    }, [isTryingToLogin]);

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
            <View style={styles.MessageContainer}>
                <Image source={logoImg} style={styles.logoImage}></Image>
                <Text style={styles.enterTitle}>Inicie sessão com o seu e-mail</Text>
            </View>
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
                        returnKeyType={"next"}
                    />
                </View>
                <View style={styles.searchSection}>
                    <Ionicons style={styles.searchIcon} name={'ios-lock'} size={20} />
                    <TextInput
                        style={styles.input}
                        onChangeText={password => setPassword(password)}
                        keyboardType='default'
                        placeholder="Palavra-passe"
                        autoCapitalize='none'
                        secureTextEntry={true}
                        value={password}
                        underlineColorAndroid="transparent"
                    />
                </View>

                {canSubmitForm && <TouchableOpacity
                    style={styles.signInButton}
                    onPress={_onLoginHandler}>
                    {showLoading == true && <SkypeIndicator color={"white"} count={5} />}
                    {showLoading == false && <Text style={styles.signInButtonText}>{'Entrar'}</Text>}
                </TouchableOpacity>}

                {!canSubmitForm && <TouchableWithoutFeedback
                    style={styles.signInButtonDisabled}>
                    {showLoading == true && <SkypeIndicator color={"white"} count={5} />}
                    {showLoading == false && <Text style={styles.signInButtonText}>{'Entrar'}</Text>}
                </TouchableWithoutFeedback>}

                <TouchableOpacity
                    style={styles.forgotPasswordButton}
                    onPress={navigateToRecoverPassword}>
                    {/* {this.state.show ? <CustomActivityIndicator /> : "not shown"} */}
                    <Text style={styles.forgotPasswordButtonText}>{'Esqueceu-se da sua palavra-passe?'.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}