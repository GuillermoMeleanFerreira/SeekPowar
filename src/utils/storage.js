import AsyncStorage from '@react-native-community/async-storage';

export function getItem(key) {
    console.log("GET FROM STORAGE: ", key);
    return AsyncStorage.getItem(key);
}

export function setItem(key, value) {
    console.log("SET IN STORAGE: " + key, value);
    return AsyncStorage.setItem(key, value);
}

export function removeItem(key) {
    console.log("REMOVE FROM STORAGE: ", key);
    return AsyncStorage.removeItem(key);
}