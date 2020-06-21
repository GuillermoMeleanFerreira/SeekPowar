import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'

import { formatDate } from '../../utils/date'

import {
    styles,
    Info,
    Arrow,
    InfoBold,
    MainContainer
} from './styles';

import Colors from '../../styles/colors';

function OrderItem({ item, onPress }) {

    return (
        <View>
            <MainContainer onPress={() => onPress(item.OrderID)}
                style={{
                    borderColor: item.OrderStatusID === "1" || item.OrderStatusID === "2" ? Colors.orange
                        : item.OrderStatusID === "3" ? Colors.green
                            : Colors.darkRed,
                    borderWidth: 1
                }}>
                <View style={{ flex: 1 }}>
                    {/* {item.OrderStatusID == 1 && <InfoBold style={{ color: Colors.darkBlue, marginTop: 0 }}>{item.deliveryStatusDescription}</InfoBold>} */}
                    <Info style={styles.infoText}>
                        <InfoBold style={styles.InfoTextBold}>ID:</InfoBold> {item.OrderID}
                    </Info>
                    <Info style={styles.infoText}>
                        <InfoBold style={styles.InfoTextBold}>Data de Criação:</InfoBold> {formatDate(new Date(item.CreateDate)) + " - " + item.CreateHour}
                    </Info>
                    <Info style={styles.infoText}>
                        <InfoBold style={styles.InfoTextBold}>Data de Entrega: </InfoBold> {formatDate(new Date(item.DateDelivery)) + " - " + item.CreateHour}
                    </Info>
                    {item.Payment != null && item.Payment.trim() !== "" &&
                        <Info style={styles.infoText}>
                            <InfoBold style={styles.InfoTextBold}>Pagamento:</InfoBold> {item.Payment}
                        </Info>
                    }
                    {item.Products != null &&
                        <Info style={styles.infoText}>
                            <InfoBold style={styles.InfoTextBold}>Produtos:</InfoBold> {item.Products.length}
                        </Info>
                    }
                </View>
                <View style={{ height: '100%' }}>
                    <Feather style={styles.arrorRight} name="chevron-right" size={25} color={'#333'}></Feather>
                    <View>
                        <InfoBold style={{ color: '#aa0000' }}>{Intl.NumberFormat('pt-PT', {
                            style: 'currency',
                            currency: 'EUR'
                        }).format(item.Price)}</InfoBold>
                        {/* <InfoBold style={{ color: '#aa0000', fontSize: 12, textAlign: 'right' }}>{Intl.NumberFormat('pt-PT', {
                            style: 'currency',
                            currency: 'EUR'
                        }).format(item.PriceIva)}</InfoBold> */}
                    </View>
                </View>
            </MainContainer >
            <View style={{
                width: '97%',
                alignSelf: 'center',
                height: StyleSheet.hairlineWidth,

            }} />
        </View>
    )
}

function areEqual(prevProps, nextProps) {
    return (prevProps.item == nextProps.item)
}

export default React.memo(OrderItem, areEqual)