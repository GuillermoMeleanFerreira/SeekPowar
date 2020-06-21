import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.tdp_purple
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
        paddingHorizontal: 10
    },

    headerTitle: {
        flex: 1,
        fontSize: Platform.OS === 'ios' ? 26 : 22,
        color: Colors.white,
        textAlign: 'center',
    },

    separator: {
        width: '100%',
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.lightgray3
    },

    pageContainer: {
        flex: 1,
        backgroundColor: Colors.background_gray,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 15,
    },

    addressContainer: {
        height: 160,
    },

    title: {
        fontSize: Platform.OS === 'ios' ? 20 : 17,
        fontWeight: '500',
        color: Colors.darkgray7
    },

    subTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: Colors.darkgray7,
        marginBottom: 10
    },

    titleList: {
        fontSize: Platform.OS === 'ios' ? 16 : 11,
        fontWeight: '500',
        color: Colors.darkgray2
    },

    subTitleList: {
        fontSize: Platform.OS === 'ios' ? 21 : 16,
        fontWeight: '500',
        color: Colors.darkgray7,
        marginBottom: 10
    },

    addressBox: {
        flex: 0.9,
        backgroundColor: Colors.lightgray,
        borderRadius: 10,
        marginTop: 5
    },

    aliasText: {
        fontSize: 16,
    },

    addressText: {
        fontSize: 20,
    },

    cpText: {
        fontSize: 18,
    },



    deliveryIconContainer: {
        flexDirection: 'row'
    },

    statusDeliveryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlignVertical: 'center',
        height: 45,
        marginTop: 5,
    },

    statusText: {
        marginLeft: 5,
        lineHeight: 23
    },

    statusIcon: {
        height: '100%',
    },

    flatListContainer: {
        flex: 1,
        marginVertical: 5,
    },

    flatList: {
        marginTop: 10
    },

    cabecalho: {
        flexDirection: 'row',
        height: 30,
        flex: 0.6
    },

    cabecalhoRowName: {
        flex: 0.45,
        height: Platform.OS === 'ios' ? 45 : 40,
        lineHeight: Platform.OS === 'ios' ? 45 : 40,
        fontSize: 20
    },
    cabecalhoRowQuantity: {
        flex: 0.275,
        height: Platform.OS === 'ios' ? 45 : 40,
        lineHeight: Platform.OS === 'ios' ? 45 : 40,
        fontSize: 20
    },
    cabecalhoRowPrice: {
        flex: 0.275,
        height: Platform.OS === 'ios' ? 45 : 40,
        lineHeight: Platform.OS === 'ios' ? 45 : 40,
        fontSize: 20
    },

    productOdd: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: Colors.background_gray
    },

    productRowName: {
        flex: 0.45,
        textAlign: 'center',
        height: Platform.OS === 'ios' ? 45 : 40,
        lineHeight: Platform.OS === 'ios' ? 45 : 40,
    },
    productRowQuantity: {
        flex: 0.275,
        textAlign: 'center',
        height: Platform.OS === 'ios' ? 45 : 40,
        lineHeight: Platform.OS === 'ios' ? 45 : 40,
    },
    productRowPrice: {
        flex: 0.275,
        textAlign: 'center',
        height: Platform.OS === 'ios' ? 45 : 40,
        lineHeight: Platform.OS === 'ios' ? 45 : 40,
    },
});