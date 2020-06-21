import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from "react-navigation-hooks";
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from '../../Components/Checkbox'
import AlertView from '../../Components/modal';

import Settings from '../../utils/settings'
import { db_getNotificationsSettings, db_updateNotificationsSettings } from '../../services/settings'

export default function SettingsScreen({ navigation }) {
    const [pageIsLoaded, setPageIsLoaded] = useState(false)
    const [notifications, setNotifications] = useState([])

    const [emailAvailable, setEmailAvailable] = useState(false);
    const [SMSAvailable, setSMSAvailable] = useState(false);
    const [pushAvailable, setPushAvailable] = useState(false);

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const toggleModal = () => { setModalVisible(!isModalVisible); };

    async function GetNotificationList() {
        setPageIsLoaded(false)
        setNotifications(await db_getNotificationsSettings())
        setPageIsLoaded(true)
    }

    useEffect(() => {
        if (notifications != null && notifications != undefined && notifications.length > 0) {
            setEmailAvailable(notifications.find(item => item.Value === "1").Selected == 'true')
            setSMSAvailable(notifications.find(item => item.Value === "2").Selected == 'true')
            setPushAvailable(notifications.find(item => item.Value === "3").Selected == 'true')
        }
    }, [notifications])

    useEffect(() => {
        GetNotificationList();
    }, [])

    async function UpdateNotificationSetting(id, value) {
        return await db_updateNotificationsSettings(id, value)
    }

    function _handlerClickNotificationButton(id, value) {
        if (UpdateNotificationSetting(id, value)) {
            // mudar para cima dentro do if
            switch (id) {
                case 1:
                    setEmailAvailable(value);
                    break;
                case 2:
                    setSMSAvailable(value);
                    break;
                case 3:
                    setPushAvailable(value);
                    break;
            }
        } else {
            toggleModal();
            setModalText(Settings.GloablErrorResponse)
        }
    }

    return (
        <View style={styles.container}>
            <AlertView isModalVisible={isModalVisible} modalText={modalText} toggleModal={toggleModal} />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Definições</Text>
            </View>
            {pageIsLoaded &&
                <View style={styles.notificationContainer}>
                    <View style={{ flexDirection: 'row', height: 30, width: '100%', marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', fontSize: 25 }}>Notificações</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View>
                            <Text style={styles.notificationTitle}>Via e-mail</Text>
                        </View>
                        <CheckBox
                            selected={emailAvailable}
                            onPress={() => { _handlerClickNotificationButton(1, !emailAvailable) }}
                        >
                        </CheckBox >
                    </View>
                    <View style={styles.buttonContainer}>
                        <View>
                            <Text style={styles.notificationTitle}>Via SMS</Text>
                        </View>
                        <CheckBox
                            selected={SMSAvailable}
                            onPress={() => { _handlerClickNotificationButton(2, !SMSAvailable) }}
                        >
                        </CheckBox >
                    </View>
                    <View style={styles.buttonContainer}>
                        <View>
                            <Text style={styles.notificationTitle}>Via push</Text>
                        </View>
                        <CheckBox
                            selected={pushAvailable}
                            onPress={() => { _handlerClickNotificationButton(3, !pushAvailable) }}
                        >
                        </CheckBox >
                    </View>
                    <View style={styles.separator}></View>
                </View>
            }
        </View>
    );
}