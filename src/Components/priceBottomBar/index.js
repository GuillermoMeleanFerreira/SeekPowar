import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'

import styles from './styles'

function PriceBottomBar({ totalPrice, Fee, Discount, showMessageInformation, messageInformation, dis }) {
    return (
        <View style={styles.container}>
            {Fee != undefined && Fee > 0 &&
                <View style={styles.ivaContainer}>
                    <View style={styles.insideContiner}>
                        <Text style={styles.titleOtherText}>Transporte</Text>
                        <Text style={styles.titleOtherText}>{Intl.NumberFormat('pt-PT', {
                            style: 'currency',
                            currency: 'EUR'
                        }).format(Fee)}</Text>
                    </View>
                </View>
            }
            {Discount != undefined && Discount > 0 &&
                <View style={styles.ivaContainer}>
                    <View style={styles.insideContiner}>
                        <Text style={styles.titleOtherText}>Valor do Desconto (10%)</Text>
                        <Text style={styles.titleOtherText}>{Intl.NumberFormat('pt-PT', {
                            style: 'currency',
                            currency: 'EUR'
                        }).format(Discount)}</Text>
                    </View>
                </View>
            }

            {Discount != undefined && Discount > 0 &&
                <View style={styles.ivaContainer}>
                    <View style={styles.insideContiner}>
                        <Text style={styles.titleOtherText}>Total s/desconto</Text>
                        <Text style={styles.titleOtherText}>{Intl.NumberFormat('pt-PT', {
                            style: 'currency',
                            currency: 'EUR'
                        }).format(totalPrice + Discount)}</Text>
                    </View>
                </View>
            }

            <View style={styles.priceContainer}>
                <View style={styles.insideContiner}>
                    <Text style={styles.titleTotalText}>TOTAL</Text>
                    <Text style={styles.titleTotalText}>{Intl.NumberFormat('pt-PT', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(totalPrice)}</Text>
                </View>
            </View>
        </View>
    )
};

export default PriceBottomBar; 