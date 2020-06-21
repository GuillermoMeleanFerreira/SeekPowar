import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
        borderBottomColor: '#e7e8ea',
        borderBottomWidth: 1,
        backgroundColor: Colors.background_gray
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingLeft: 5,
        paddingRight: 15,
    },

    MessageContainer: {
        flex: Platform.OS === 'ios' ? 0.3 : 0.5,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },

    logoImage: {
        flex: 1,
        alignContent: 'center',
        width: 180,
        resizeMode: 'contain',
    },

    enterTitle: {
        fontSize: Platform.OS === 'ios' ? 22 : 17,
        color: Colors.tdp_purple,
        fontWeight: '500',
    },

    inputsContainer: {
        paddingTop: 10,
        paddingHorizontal: 0,
        marginHorizontal: 20,
        borderRadius: 20,
        marginTop: 0
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        marginBottom: 10,
        height: 45,
        borderRadius: 5
    },
    searchIcon: {
        paddingVertical: 10,
        paddingLeft: 15,
        paddingRight: 10,
        color: Colors.darkgray2,
        marginRight: 10
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        color: '#424242',
        fontSize: 15
    },

    signInButton: {
        backgroundColor: Colors.tdp_purple,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        marginTop: 5,
        borderRadius: 25
    },

    signInButtonDisabled: {
        backgroundColor: Colors.tdp_purple,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        marginTop: 5,
        borderRadius: 25,
        opacity: 0.2
    },

    signInButtonText: {
        color: Colors.white,
        fontSize: Platform.OS === 'ios' ? 22 : 18,
        fontWeight: '500'
    },

    forgotPasswordButton: {
        height: 20,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    forgotPasswordButtonText: {
        color: Colors.tdp_purple,
        fontSize: 11,
        fontWeight: '500'
    },


    /// Modal
    cardModalContainer: {
        height: 122.5,
        backgroundColor: 'grey',
        marginTop: 'auto',
        marginBottom: 'auto',
        borderRadius: 10
    },
    titleModalContainer: {
        flex: 0.6, backgroundColor: 'rgb(28, 28, 30)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    buttonModalContainer: {
        flex: 0.4,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 1
    },

    errorMessageText: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: Platform.OS === 'ios' ? 22 : 16,
        marginVertical: 1,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: '500'
    },

    acceptMessageButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: Platform.OS === 'ios' ? 18 : 14,
        marginVertical: 1,
        width: '100%',
        color: 'green',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: '600'
    },

    cancelMessageButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: Platform.OS === 'ios' ? 18 : 14,
        marginVertical: 1,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: '600'
    },
    buttonModal: {
        backgroundColor: 'rgb(28, 28, 30)', flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
});