import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView, Image, SafeAreaView, AsyncStorage } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "react-navigation-hooks";

import { Info } from './styles'
import styles from './styles'

import { View } from 'react-native'

import HeaderBar from '../../Components/headerBar'
import { version } from '../../../package.json'

function DrawerNavigator({ navigation }) {
    const { navigate } = useNavigation();
    const [val, setVal] = useState(0);
    const [notifications, setNotifications] = useState(true);

    function _pressHandler(route) {

        if (route == 'log_out') {
            cleanCredentials();
            navigate('Login')
        } else if (route == 'notifications') {
            setNotifications(!notifications);
        }
        else {
            navigation.navigate(route);
            navigation.closeDrawer()
        }
    }

    async function cleanCredentials() {
        try {
            await AsyncStorage.removeItem(
                '@email-logged'
            );
        } catch (error) {
            //console.log(error)
        }
    };

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1, paddingBottom: 10, paddingHorizontal: 0 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderBar title='drawer'></HeaderBar>

                <TouchableOpacity onPress={() => _pressHandler('account')} style={styles.section}>
                    <Ionicons name={'ios-person'} size={30} />
                    <Info style={styles.Info} selected={val == 4}>{'Conta'}</Info>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => _pressHandler('notifications')} style={styles.section}>
                    <Ionicons name={notifications ? 'ios-notifications-outline' : 'ios-notifications-off'} size={30} />
                    <Info style={styles.Info} selected={val == 4}>{'Notificações'}</Info>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => _pressHandler('settings')} style={styles.section}>
                    <Ionicons name={'ios-cog'} size={30} />
                    <Info style={styles.Info} selected={val == 4}>{'Definições'}</Info>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => _pressHandler('log_out')} style={styles.section}>
                    <Ionicons name={'ios-log-out'} size={30} />
                    <Info style={styles.Info} selected={val == 4}>{'Terminar Sessão'}</Info>
                </TouchableOpacity>


                <View style={{ flex: 1 }} />

                <View style={{ borderTopColor: '#f00', alignItems: 'center', width: '90%', alignSelf: 'center' }}>
                    <Image resizeMode={'contain'} style={{ width: '60%', height: 30 }} source={require('../../assets/logo.png')}></Image>
                    <Info style={{ fontSize: 11, marginTop: 10, textAlign: 'center' }}>{''}</Info>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <TouchableOpacity hitSlop={{ top: 5, bottom: 5 }} onPress={() => { }}>
                            <Info style={{ fontSize: 11, marginLeft: 5 }}>{'Termos e condições'}</Info>
                        </TouchableOpacity>
                        <TouchableOpacity hitSlop={{ top: 5, bottom: 5 }} style={{ paddingHorizontal: 3 }} onPress={() => { }}>
                            <Info style={{ fontSize: 11, marginLeft: 5 }}>{'Políticas de privacidade'}</Info>
                        </TouchableOpacity>
                    </View>
                </View>
                <Info style={{ fontSize: 8, color: 'rgb(174, 174, 178)', alignSelf: 'flex-end', marginRight: '5%' }}>v.{version}</Info>
            </SafeAreaView>
        </ScrollView>
    )

    // function onPressInformation(screen) {
    //     const baseURL = "https://hbfullerstorageprd.blob.core.windows.net/hbfullerportal/Policies/"
    //     var screenType = "";
    //     switch (screen) {
    //         case "Terms":
    //             screenType = "Terms_And_Conditions_"
    //             break;
    //         case "Privacy":
    //             screenType = "Privacy_Notice_"
    //             break;
    //         case "CookieUsage":
    //             screenType = "Cookie_Policy_"
    //             break;
    //         case "LegalNotices":
    //             screenType = "Legal_Notices_"
    //             break;
    //         default:
    //             break;
    //     }
    //     const fUrl = baseURL + 'culture' + "/" + screenType + 'culture' + ".pdf"

    //     const info = {
    //         url: fUrl,
    //         screen
    //     }
    //     navigation.navigate('PoliciesPdfViewer', { info })
    // }
}

export default DrawerNavigator;