import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
        borderBottomColor: '#e7e8ea',
        backgroundColor: Colors.white
    },

    imageContainer: {
        flex: Platform.OS === 'ios' ? 0.6 : 0.75,
        flexDirection: 'column',
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: Colors.tdp_purple
    },
    MessageContainer: {
        flex: Platform.OS === 'ios' ? 0.15 : 0.1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.tdp_purple
    },

    inputsContainer: {
        flex: Platform.OS === 'ios' ? 0.25 : 0.15,
        paddingHorizontal: 20,
        backgroundColor: Colors.tdp_purple,
        justifyContent: 'center'
    },

    logoImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    title: {
        fontSize: Platform.OS === 'ios' ? 25 : 20,
        color: Colors.white,
        fontWeight: '700',
        textAlign: 'center'
    },

    subTitle: {
        fontSize: Platform.OS === 'ios' ? 16 : 13,
        color: Colors.white,
        fontWeight: '500',
        textAlign: 'center'
    },

    signInButton: {
        backgroundColor: Colors.white,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        borderRadius: 25
    },

    signInButtonText: {
        color: Colors.tdp_purple,
        fontSize: 18,
        fontWeight: '500'
    },
});