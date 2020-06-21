import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background_gray,
    },

    header: {
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 100 : 50,
        backgroundColor: Colors.tdp_purple
    },

    headerTitle: {
        flex: 1,
        fontSize: Platform.OS === 'ios' ? 30 : 25,
        color: Colors.white,
        fontWeight: '600',
        paddingLeft: 20,
    },

    notificationContainer: {
        padding: 10
    },

    checkbox: {
        borderRadius: 2,
        borderColor: Colors.tdp_purple,
        borderWidth: 1,
        width: 50,
        height: '100%',
        marginLeft: 'auto'
    },

    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        marginVertical: 10
    },

    notificationTitle: {
        fontSize: Platform.OS === 'ios' ? 22 : 18,
        lineHeight: 50
    },

    separator: {
        width: '100%',
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.lightgray3
    },
});