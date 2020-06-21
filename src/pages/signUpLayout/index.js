import React, { useState, useEffect } from 'react';
import styles from './styles';
import { Text, View, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import api from '../../services/api'
import { SkypeIndicator } from 'react-native-indicators';
import { useNavigation } from "react-navigation-hooks";
import Modal from 'react-native-modal';

import { db_validadeUser } from '../../services/user'

import logoImg from '../../assets/logo.png';

export default function SignUp({ navigation }) {
    const { navigate } = useNavigation();

    var emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const [canSubmitForm, setCanSubmitForm] = useState(false);
    const [firstLastName, setFirstLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [isTryingToLogin, setIsTryingToLogin] = useState(false);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        if (emailRegex.test(email) && firstLastName != "" && mobileNumber.length == 9) {
            setCanSubmitForm(true);
        } else {
            setCanSubmitForm(false);
        }
    }, [email, firstLastName, mobileNumber]);



    function navigateBack() {
        navigation.goBack();
    }

    async function _onRegisterHandler() {
        if (firstLastName != "" && emailRegex.test(email) && mobileNumber != "") {
            setIsTryingToLogin(true)

            if (!showLoading) {
                Keyboard.dismiss()

                try {
                    var responseModel = await db_validadeUser(email, mobileNumber);

                    if (responseModel.Status == 401) {
                        setModalText('clientID não é autorizado.');
                        toggleModal()
                    } else if (responseModel.Status == 200) {
                        if (responseModel.ErrorMessage) {
                            setModalText(responseModel.ErrorMessage);
                            toggleModal()
                        } else {
                            navigation.navigate('CodeValidationSignUpLayout', { firstLastName, email, mobileNumber, recoveryCode: responseModel.Code });
                        }
                    } else {
                        setModalText(responseModel.ErrorMessage);
                        toggleModal()
                    }
                } catch (ex) {
                    setModalText('Ocorreu um erro interno do servidor. Por favor tente mais tarde.');
                    toggleModal()
                }

            }
            setIsTryingToLogin(false)
        }
    }

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
                <Text style={styles.enterTitle}>Registe-se com o seu e-mail</Text>
            </View>
            <View style={styles.inputsContainer}>
                <View style={styles.searchSection}>
                    <Ionicons style={styles.searchIcon} name={'ios-person'} size={20} />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setFirstLastName(text)}
                        keyboardType='default'
                        placeholder="Primeiro e último nome"
                        value={firstLastName}
                        autoCapitalize='none'
                        returnKeyType={"next"}
                    />
                </View>
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
                    <Ionicons style={styles.searchIcon} name={'ios-call'} size={20} />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setMobileNumber(text)}
                        keyboardType='number-pad'
                        placeholder="Número de telemóvel"
                        value={mobileNumber}
                        autoCapitalize='none'
                        returnKeyType={"next"}
                    />
                </View>


                {canSubmitForm && <TouchableOpacity
                    style={styles.signInButton}
                    onPress={_onRegisterHandler}>
                    {showLoading == true && <SkypeIndicator color={"white"} count={5} />}
                    {showLoading == false && <Text style={styles.signInButtonText}>{'Próximo passo'}</Text>}
                </TouchableOpacity>}

                {!canSubmitForm && <TouchableOpacity
                    style={styles.signInButtonDisabled}>
                    {showLoading == true && <SkypeIndicator color={"white"} count={5} />}
                    {showLoading == false && <Text style={styles.signInButtonText}>{'Próximo passo'}</Text>}
                </TouchableOpacity>}

            </View>
        </View>

    );
}