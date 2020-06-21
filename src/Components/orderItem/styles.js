import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Info = styled.Text`
    color: black; 
    margin:7px 0px 0px 0px;
`;


export const InfoBold = styled(Info)`
    font-weight:bold;
`;

export const MainContainer = styled.TouchableOpacity`
    flex-direction: row;
    padding:5px 20px 10px 20px;
    margin-top:5px;
    background-color:white;
    border-color:black;
    border-radius:15px;
    width:100%;
`;


export const styles = StyleSheet.create({
    arrorRight: {
        textAlign: 'right'
    },

    infoText: {
        fontSize: Platform.OS === 'ios' ? 16 : 12,
    },
    InfoTextBold: {
        fontSize: Platform.OS === 'ios' ? 16 : 12,
    }
});
