import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Colors from '../../styles/colors'


export default StyleSheet.create({
    buttonContainer: {
        flex: 0.1,
        paddingHorizontal: 10,
        backgroundColor: Colors.background_gray,
        paddingBottom: 5
    },

    NextButton: {
        height: Platform.OS === 'ios' ? 45 : 35,
        backgroundColor: Colors.tdp_purple,
        borderRadius: 5,
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    NextButtonDisabled: {
        height: Platform.OS === 'ios' ? 45 : 35,
        backgroundColor: Colors.tdp_purple,
        borderRadius: 5,
        marginTop: 'auto',
        marginBottom: 'auto',
        opacity: 0.5
    },

    textNextButton: {
        color: 'white',
        fontSize: Platform.OS === 'ios' ? 28 : 20,
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign: 'center',
        fontWeight: '500'
    },
});