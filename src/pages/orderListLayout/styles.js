import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
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

    filterBar: {
        flex: 0.11,
        zIndex: 10,
        elevation: 10
    },

    flatList: {
        flex: 0.9,
        marginTop: 10,
        marginHorizontal: 10
    },

    StatusContainer: {
        flex: 0.9,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});