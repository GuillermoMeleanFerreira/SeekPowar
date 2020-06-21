import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'

export const Info = styled.Text.attrs({

})`
    font-weight:900;
    color: 'rgb(0,56,165)';  
    opacity: ${props => props.sel ? 1 : 0.5};
    font-size: ${props => props.sel ? Platform.OS === 'ios' ? 16 : 12 : Platform.OS === 'ios' ? 12 : 10}px;
`;

export const LoadingIcon = styled.Image.attrs({
    source: require('../../assets/loading.gif')
})`
    width: 30px;
    height: 30px ;
`;

export const StatusContainer = styled.TouchableOpacity.attrs(props => ({
    borderBottomColor: Colors.tdp_purple
}))`
    flex:1;
    justify-content:center;
    align-items:center; 
    border-bottom-width: ${props => props.sel ? 2 : 0.5}px; 
    border-bottom-color: 'rgb(52,54,141)';
`;

export const styles = StyleSheet.create({
    MainContainer: {
        shadowColor: Colors.lightgray4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 1,
        elevation: 5,
        zIndex: 5,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: Platform.OS === 'ios' ? 70 : 50,
    }
});
