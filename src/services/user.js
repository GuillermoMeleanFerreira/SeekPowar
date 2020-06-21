import React, { AsyncStorage, PanResponder } from 'react-native';
import api from './api';

import Settings from '../utils/settings';

const GLOBAL_ERROR_RESPONSE = 'Ocorreu um erro inesperado. Por favor tente mais tarde.'

export async function getLoggedEmail() {
    try {
        var value = await AsyncStorage.getItem('@email-logged');
        if (value != null) {
            return value;
        }
    } catch (error) {
        return 0;
    }
}

export default async function getLoggedUserID() {
    try {
        var value = await AsyncStorage.getItem('@userID-logged');
        if (value != null) {
            return value;
        }
    } catch (error) {
        return 0;
    }
}

export async function confirmOldPassword(oldPassword) {

    try {
        var oldPasswordSaved = await AsyncStorage.getItem('@password-logged');

        if (oldPasswordSaved === null) {
            return false;
        }

        if (oldPasswordSaved === oldPassword) {
            return true
        }

        return false;

    } catch (error) {
        return false;
    }

    return oldPassword == oldPassword;
}
