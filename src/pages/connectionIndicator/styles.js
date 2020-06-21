import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
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
        backgroundColor: '#fff'
    },

    imageContainer: {
        flex: 0.6,
    },


    Image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    textContainer: {
        flex: 0.4,
        backgroundColor: Colors.tdp_purple
    },

    Title: {
        fontSize: 35,
        marginTop: 50,
        textAlign: 'center',
        fontWeight: '700',
        color: '#fff'
    },

    Description: {
        fontSize: 13,
        paddingTop: 10,
        marginHorizontal: 60,
        textAlign: 'center',
        fontWeight: '500',
        color: '#fff',
        lineHeight: 22
    },

    upgradeButton: {
        backgroundColor: '#fff',
        textAlign: 'center',
        height: 60,
        width: '65%',
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },

    upgradeButtonText: {
        color: Colors.tdp_purple,
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 22,
        fontWeight: '600'
    }

});