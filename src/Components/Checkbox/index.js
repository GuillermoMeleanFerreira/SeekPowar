import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../styles/colors'

import styles from './styles'


export default function CheckBox({ selected, onPress, style, textStyle, size = 35, text = '', ...props }) {

    return (
        <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
            <Icon
                size={Platform.OS === 'ios' ? size : size * 0.9}
                color={Colors.tdp_purple}
                name={selected ? 'check-box' : 'check-box-outline-blank'}
            />

            <Text style={textStyle}> {text} </Text>
        </TouchableOpacity>
    )
}