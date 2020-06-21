import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/index';

export const Title = styled.Text.attrs({
    color: Colors.darkBlue
})`
    flex:1;
    text-align:center;
    padding:0px 10px 0px 10px; 
    font-size:27; 
    color: ${Colors.darkBlue};
`;

export const Info = styled.Text` 
    font-size:13; 
    color: ${Colors.white};
    align-self:center;
    text-align:center;
`;


export const DrawerComponent = styled.View.attrs({
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 5,
    elevation: 5,
    height: 55,
    backgroundColor: Colors.lightgray,
    shadowRadius: 1
})`
        elevation:5; 
        shadow-color: ${Colors.darkgray2};
        shadow-offset: 0px 2px;
        shadow-opacity: 0.7; 
`;

export const HeaderComponent = styled.View.attrs({
    paddingHorizontal: 20,
    zIndex: 5,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    backgroundColor: Colors.lightgray,
    width: '100%',
    shadowRaiuds: 1

})`
        elevation:${props => props.sel ? 6 : 5};
        shadow-color: ${Colors.darkgray2};
        shadow-offset: 0px 2px;
        shadow-opacity: 0.7;
`;

export const styles = StyleSheet.create({

});
