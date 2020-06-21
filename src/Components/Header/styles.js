import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Colors from '../../styles/colors'

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

    backIcon: {
        paddingLeft: 10
    },

    headerTitle: {
        flex: 1,
        fontSize: Platform.OS === 'ios' ? 30 : 25,
        color: Colors.white,
        fontWeight: '600',
        paddingLeft: 20,
    },

    cartIcon: {
        paddingRight: 20
    },

    backIcon: {
        paddingLeft: 10
    },
})