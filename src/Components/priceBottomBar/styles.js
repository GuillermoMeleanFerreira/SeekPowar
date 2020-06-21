import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Colors from '../../styles/colors'


export default StyleSheet.create({
    container: {
        backgroundColor: Colors.background_gray,
        paddingTop: 10,
        minHeight: 50,
        justifyContent: 'space-between',


        borderTopWidth: StyleSheet.hairlineWidth,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.25,
    },

    ivaContainer: {
        paddingHorizontal: 10
    },

    priceContainer: {
        paddingHorizontal: 10
    },

    insideContiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    titleTotalText: {
        fontSize: Platform.OS === 'ios' ? 23 : 16,
        color: Colors.black,
    },

    titleOtherText: {
        fontSize: Platform.OS === 'ios' ? 18 : 12,
        color: Colors.black,
    },
});