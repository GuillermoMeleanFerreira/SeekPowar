import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background_gray
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

    carouselContainer: {
        marginTop: 10,
    },

    titleText: {
        color: Colors.black,
        fontSize: Platform.OS === 'ios' ? 35 : 24,
        textAlign: 'center'
    },

    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    logoImage: {
        flex: 1,
        alignContent: 'center',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 20
    },

    swiperBoxiOS: {
        height: '100%',
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { width: 5, height: 3, },
        elevation: 1,
        borderColor: Colors.background_gray,
    },

    swiperBoxAndroid: {
        height: '100%',
    },

    imagecontainer: {
        backgroundColor: 'red'
    },

    swiperContainer: {
        flex: Platform.OS === 'ios' ? 0.45 : 0.55
    },

    textContainer: {
        flex: Platform.OS === 'ios' ? 0.45 : 0.45,
        paddingHorizontal: 20,
    },

    paginationContainer: {
        flex: Platform.OS === 'ios' ? 0.1 : 0.15
    },

    textBoxContainer: {
        marginTop: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.black,
        flexDirection: 'row',
        paddingVertical: 5,
    },

    titlePropertyText: {
        fontSize: Platform.OS === 'ios' ? 15 : 12,
        color: Colors.tdp_purple,
        fontWeight: '500'
    },
    descriptionPropertyText: {
        fontSize: Platform.OS === 'ios' ? 18 : 14
    },

    iconView: {
        width: '9%',
        marginRight: 5,
        marginTop: 'auto',
        marginBottom: 'auto',
    },

    textView: {
        textAlign: 'left',
        width: '85%',
    },


    lilimg: {
        alignContent: 'center',
        width: 30,
        resizeMode: 'contain'
    }
});