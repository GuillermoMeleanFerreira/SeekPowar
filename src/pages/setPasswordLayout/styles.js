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
        fontSize: Platform.OS === 'ios' ? 20 : 17,
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
        borderRadius: 5,
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

    signInButtonText: {
        color: Colors.white,
        fontSize: Platform.OS === 'ios' ? 22 : 18,
        fontWeight: '500'
    },

    stateBadPasswordBar: {
        height: 2,
        backgroundColor: Colors.red,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 50
    },

    stateMediumPasswordBar: {
        height: 2,
        backgroundColor: Colors.lightyellow,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 50
    },

    stateGoodPasswordBar: {
        height: 2,
        backgroundColor: Colors.green,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 50
    },
});