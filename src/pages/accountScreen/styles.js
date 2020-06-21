import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'
import Constants from 'expo-constants';

// export const LoadingIcon = styled.Image.attrs({
//     source: require('../../assets/loading.gif'),
//     paddingLeft: 'auto',
//     paddingRight: 'auto'
// })`
//     width: 200px;
//     height: 200px;
// `;

export default StyleSheet.create({
    scene: {
        flex: 1,
        marginHorizontal: 10
    },
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

    saveDataButton: {
        backgroundColor: Colors.tdp_purple,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 45 : 45,
        marginTop: 5,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%'
    },

    textButton: {
        color: Colors.white,
        paddingLeft: 10,
        fontSize: 20
    },

    signInButtonText: {
        color: Colors.white,
        fontSize: Platform.OS === 'ios' ? 22 : 18,
        fontWeight: '500',
        textAlign: 'center'
    },

    flatList: {
        paddingTop: 10,
        paddingBottom: 10
    },

    address: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 8,
        alignItems: 'baseline',
        overflow: 'hidden',
        minHeight: Platform.OS === 'ios' ? 50 : 30,
    },

    titleAddress: {
        fontSize: Platform.OS === 'ios' ? 24 : 15,
        textAlign: 'left',
        color: '#444',
        fontWeight: '500',
        flexDirection: 'row',
        paddingBottom: 20,
        textDecorationLine: 'underline',
    },

    boxContainer: {
        alignSelf: 'baseline'
    },

    textTitleProperty: {
        fontSize: 12,
        textDecorationLine: 'underline'
    },

    textValueProperty: {
        fontSize: 20,
        paddingBottom: 5
    },

    textInputsContainer: {
        flex: Platform.OS === 'ios' ? 0.9 : 0.85
    },

    buttonToSaveContainer: {
        flex: Platform.OS === 'ios' ? 0.1 : 0.15,
        flexDirection: 'row'
    },

    /// Modal
    cardModalContainer: {
        height: 175,
        backgroundColor: 'grey',
        marginTop: 'auto',
        marginBottom: 'auto',
        borderRadius: 10,
        margin: 10,
    },
    titleModalContainer: {
        flex: 0.6, backgroundColor: 'rgb(28, 28, 30)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20
    },

    buttonRemoveModalContainer: {
        flex: 0.4,
        marginTop: 1
    },

    buttonCancelModalContainer: {
        flex: 0.4,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 1
    },

    errorMessageText: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: Platform.OS === 'ios' ? 22 : 16,
        marginVertical: 1,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: '500'
    },

    acceptMessageButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: Platform.OS === 'ios' ? 18 : 14,
        marginVertical: 1,
        width: '100%',
        color: 'green',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: '600'
    },

    removeMessageButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: Platform.OS === 'ios' ? 18 : 14,
        marginVertical: 1,
        width: '100%',
        color: Colors.red,
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: '500'
    },

    cancelMessageButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: Platform.OS === 'ios' ? 18 : 14,
        marginVertical: 1,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: '600'
    },

    buttonRemoveModal: {
        backgroundColor: 'rgb(28, 28, 30)', flex: 1,
    },


    buttonCancelModal: {
        backgroundColor: 'rgb(28, 28, 30)', flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
});