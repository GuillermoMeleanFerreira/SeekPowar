import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import {
    Colors
} from '../../styles';

export default StyleSheet.create({
    Info: {
        fontSize: 19,
        marginLeft: 20
    },

    section: {
        marginTop: 20,
        paddingLeft: 20,
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export const Info = styled.Text`
    color: ${Colors.darkgray2};
    opacity:${props => props.selected ? 1 : 1};
    color:${props => props.selected ? Colors.darkBlue : Colors.darkgray2};
`;