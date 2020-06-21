import React, { useState, useEffect } from 'react';
import Animated from 'react-native-reanimated';
import { TouchableOpacity, Image } from 'react-native'

import { Colors } from '../../styles/index';

import { db_getOrdersStatus } from '../../services/orders';


import {
    Info,
    styles,
    LoadingIcon,
    StatusContainer
} from './styles';

const minScroll = 100;

function FiltersTab({ onPressStatus, orderFilterSelected }) {
    const [ordersCountLoading, setOrdersCountLoading] = useState(false);
    const [pendingOrder, setPendingOrder] = useState(0);
    const [completedOrders, setCompletedOrders] = useState(0);

    async function loadOrders() {
        setOrdersCountLoading(true);

        var list = await db_getOrdersStatus();

        setCompletedOrders(list[1]);
        setPendingOrder(list[2]);

        setOrdersCountLoading(false)
    }

    useEffect(() => {
        loadOrders();
    }, [])

    return (
        <Animated.View style={[styles.MainContainer]}>
            {/*Pending*/}
            <StatusContainer sel={orderFilterSelected == 1} onPress={() => false ? null : onPressStatus(1)}  >
                {ordersCountLoading ?
                    <LoadingIcon />
                    :
                    <Info sel={orderFilterSelected == 1} style={{ color: Colors.orange, fontSize: Platform.OS === 'ios' ? 20 : 15 }}>{pendingOrder}</Info>}
                <Info sel={orderFilterSelected == 1} style={{ marginTop: Platform.OS === 'ios' ? 5 : 0 }}>{'Pendentes'}</Info>
            </StatusContainer>

            {/*Completed*/}
            <StatusContainer sel={orderFilterSelected == 2} onPress={() => false ? null : onPressStatus(2)}>
                {ordersCountLoading ?
                    <LoadingIcon />
                    :
                    <Info
                        sel={orderFilterSelected == 2}
                        style={{ color: Colors.green, fontSize: Platform.OS === 'ios' ? 20 : 15 }}
                    >{completedOrders}</Info>
                }
                <Info sel={orderFilterSelected == 2} style={{ marginTop: Platform.OS === 'ios' ? 5 : 0 }}>{'Completos'}</Info>
            </StatusContainer>

            {/*Canceled*/}
            {/* <StatusContainer sel={orderFilterSelected == 3} onPress={() => false ? null : onPressStatus(3)}  >
                {ordersCountLoading ?
                    <LoadingIcon />
                    :
                    <Info sel={orderFilterSelected == 3} style={{ color: Colors.red, fontSize: 20 }}>{canceledOrders}</Info>}
                <Info sel={orderFilterSelected == 3} style={{ marginTop: 5 }}>{'Cancelados'}</Info>
            </StatusContainer> */}
        </Animated.View >
    );
}

function areEqual(prevProps, nextProps) {

    return prevProps.orderFilterSelected == nextProps.orderFilterSelected
}

export default React.memo(FiltersTab, areEqual)