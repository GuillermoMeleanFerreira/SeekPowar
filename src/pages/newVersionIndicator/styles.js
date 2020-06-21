import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'

export default StyleSheet.create({
    container: {
        position: 'absolute',
        shadowColor: Colors.lightgray2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        width: '100%',
        zIndex: 10,
        elevation: 10,
        height: '100%',
        backgroundColor: Colors.white
    },

    imageContainer: {
        flex: Platform.OS === 'ios' ? 0.5 : 0.65,
        flexDirection: 'column',
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: Colors.tdp_purple
    },

    Image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    textContainer: {
        flex: Platform.OS === 'ios' ? 0.25 : 0.15,
    },

    Title: {
        fontSize: Platform.OS === 'ios' ? 35 : 22,
        marginTop: Platform.OS === 'ios' ? 50 : 15,
        textAlign: 'center',
        fontWeight: '700',
        color: Colors.darkgray3
    },

    Description: {
        fontSize: Platform.OS === 'ios' ? 13 : 11,
        paddingTop: 5,
        marginHorizontal: Platform.OS === 'ios' ? 60 : 35,
        textAlign: 'center',
        fontWeight: '500',
        color: Colors.lightgray7,
        lineHeight: Platform.OS === 'ios' ? 22 : 16
    },

    buttonContainer: {
        flex: 0.25,
    },

    upgradeButton: {
        backgroundColor: Colors.tdp_purple,
        textAlign: 'center',
        height: 45,
        width: '80%',
        alignSelf: 'center',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText:
    {
        color: '#fff',
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 22
    },

    buttonTextNoThanks: {
        color: Colors.tdp_purple,
        textAlign: 'center',
        lineHeight: 45,
        fontSize: 17,
        fontWeight: '500'
    },
});