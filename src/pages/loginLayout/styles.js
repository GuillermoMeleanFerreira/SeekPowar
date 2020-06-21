import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
        backgroundColor: Colors.background_gray
    },

    imageContainer: {
        paddingHorizontal: 60,
        paddingTop: 50,
    },

    textContainer: {
        flex: 0,
        paddingHorizontal: 15
    },

    buttonsContainer: {
        marginTop: 15,
        paddingLeft: 15
    },


    logoImage: {
        flex: 1,
        alignContent: 'center',
        width: '100%',
        resizeMode: 'contain'
    },

    Welcome: {
        fontSize: Platform.OS === 'ios' ? 33 : 24,
        fontWeight: '500'
    },

    WelcomeMessage: {
        paddingTop: 5,
        fontSize: Platform.OS === 'ios' ? 20 : 16,
    },

    signInButton: {
        backgroundColor: Colors.tdp_purple,
        paddingVertical: 10,
        paddingLeft: 25,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
    },

    signUpGrey: {
        backgroundColor: Colors.lightgray7,
        paddingVertical: 10,
        paddingLeft: 25,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        marginTop: 10,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30
    },

    signUpButton: {
        backgroundColor: Colors.signIn,
        paddingVertical: 10,
        paddingLeft: 25,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        marginTop: 10,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30
    },

    buttonText: {
        color: '#fff',
        fontSize: Platform.OS === 'ios' ? 20 : 16
    }
});