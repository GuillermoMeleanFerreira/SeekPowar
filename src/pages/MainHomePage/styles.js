import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Colors from '../../styles/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 150,
        paddingHorizontal: 10,
    },

    title: {
        marginTop: 40,
        fontSize: 30,
        color: '#13131a',
        fontWeight: '600'
    },

    logoImage: {
        width: 78,
        height: 120,
        resizeMode: 'contain',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 1,
        marginLeft: 10,
        shadowOffset:
        {
            width: 5,
            height: 3,
        },
        borderWidth: 1,
        borderColor: 'white'
    },

    yourPointsText: {
        color: 'white',
        fontSize: Platform.OS === 'ios' ? 18 : 14
    },

    pointsText: {
        color: 'white',
        fontSize: Platform.OS === 'ios' ? 35 : 24
    },

    underlineBox: {
        height: 4,
        backgroundColor: Colors.white,
        width: '35%',
        marginTop: 5,
        fontWeight: '500'
    },

    promoProductInsideContainer: {
        height: 200,
        shadowOpacity: 0.7,
        shadowOffset: { width: 1, height: 1, },
        borderRadius: 10,
        backgroundColor: Colors.white,
        flex: 1,
        flexDirection: 'row'
    },

    receitasProductInsideContainer: {
        height: 200,
        shadowOpacity: 0.7,
        shadowOffset: { width: 1, height: 1, },
        borderRadius: 10,
        backgroundColor: Colors.white,
        flex: 1,
        flexDirection: 'row'
    },

    promoProductsSwiperBox: {
        height: 200,
        shadowOpacity: 0.2,
        shadowOffset: { width: 5, height: 3, },
        borderRadius: 10,
        width: '100%',
        backgroundColor: Colors.white
    },

    carouselContainer: {
        marginTop: 10,
        paddingBottom: 10
    },

    itemPromo: {
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.white,
        borderRadius: 10
    },

    titleSection: {
        marginHorizontal: 10,
        color: Colors.white,
        fontSize: 25,
        shadowColor: Colors.darkgray2,
        shadowOpacity: 1,
        shadowOffset: { width: 5, height: 5 }
    },

    sectionContainer:
    {
        marginBottom: 10
    },


    // product 
    unitText: {
        alignSelf: 'flex-end',
        paddingRight: 5,
        color: Colors.lightgray2,
        fontSize: Platform.OS === 'ios' ? 14 : 12
    },

    image: {
        width: '100%',
        height: 110,
        resizeMode: 'contain',
        flex: 0.2,
    },

    titleProduct: {
        fontSize: Platform.OS === 'ios' ? 18 : 14,
        flex: 0.6,
        textAlign: 'center',
        color: '#35398c',
        fontWeight: '500',
        paddingHorizontal: 5,
        marginTop: 10
    },

    priceContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0.2,
        marginRight: 4
    },

    priceProduct: {
        fontSize: 17,
        textAlign: 'center',
        alignSelf: 'stretch',
        color: '#35398c',
    },

    noDiscontPriceProduct: {
        fontSize: 13,
        color: 'red',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        textAlign: 'center',
        alignSelf: 'stretch',
        fontWeight: '500'
    },

    saberMaisButton: {
        backgroundColor: '#34368d',
        borderRadius: 2,
        width: '80%',
        height: 30,
        marginTop: 10,
        padding: 5,
        justifyContent: 'center'
    },

    saberMaisText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 2,
    },
});