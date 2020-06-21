import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/index';
import { Ionicons } from '@expo/vector-icons';

export const TabContainer = styled.View.attrs({
    borderTopWidth: StyleSheet.hairlineWidth
})`
    padding:6px; 
    border-top-color:${Colors.lightgray6};
    elevation:40;
    background-color:${Colors.lightgray}; 
    flex-direction:row; 
    align-items:center;
`
export const MainContainer2 = styled.View`
  shadow-color: ${Colors.black};  
  shadow-opacity: 0.1;
  shadow-offset: 10px 200px;
  shadow-radius: ${StyleSheet.hairlineWidth};

`

export const MainContainer = styled.View.attrs({
    borderRadius: 2,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    shadowRadius: 2,
    height: Platform.OS === 'ios' ? 80 : 50
})` 
  border-color: #ddd;
  background-color:${Colors.lightgray}; 
  elevation:20;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.8;

`
export const MainContainer1 = styled.View.attrs({
})`
    elevation:20;
    background-color:${Colors.white};
`
export const Info = styled.Text.attrs(props => ({
    fontSize: 20,
}))`

    /* font-family: 14; */
    color: ${(props) => props.selected ? Colors.tdp_purple : Colors.darkgray2};
    font-size:11px
`;

export const OrdersIcon = styled.Image.attrs(props => ({
    source: props.selected ? require('../../assets/logo.png') : require('../../assets/logo.png')
}))`
    width: 18;
    height: 18;

`;

export const ProductsIcon = styled.Image.attrs(props => ({
    source: props.selected ? require('../../assets/logo.png') : require('../../assets/logo.png')
}))`
    width: 20;
    height: 18;
    
`;

export const TrasactionsIcon = styled.Image.attrs(props => ({
    source: props.selected ? require('../../assets/logo.png') : require('../../assets/logo.png')
}))`
    width: 20;
    height: 20;

`;

export const UserIcon = styled.Image.attrs(props => ({
    source: props.selected ? require('../../assets/logo.png') : require('../../assets/logo.png')
}))`
    width: 20;
    height: 20;
  
`;

export const SearchIcon = styled.Image.attrs(props => ({
    source: props.selected ? require('../../assets/logo.png') : require('../../assets/logo.png')
}))`
    width: 25;
    height: 25;

`;

export const MoreIcon = styled.Image.attrs(props => ({
    source: props.selected ? require('../../assets/logo.png') : require('../../assets/logo.png')
}))`
    width: 23;
    height: 23;

`;

export const Separator = styled.View`
    background-color:${Colors.darkBlue};
    height:100%;
    width:${StyleSheet.hairlineWidth};
`

export const TopSeparator = styled.View`
    background-color:${Colors.darkBlue};
    height:1px;
`