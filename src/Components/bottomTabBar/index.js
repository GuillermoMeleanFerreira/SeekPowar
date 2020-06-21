import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather, Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/index'
import { TouchableOpacity, Text, ToastAndroid, BackHandler } from 'react-native'
import {
    TabContainer,
    OrdersIcon,
    ProductsIcon,
    MainContainer,
    TrasactionsIcon, Info, MoreIcon,
    SearchIcon,
} from './styles'

function BottomTabBar({ navigation, state }) {
    const { navigate } = useNavigation();
    const [val, setVal] = useState(0);

    useEffect(() => {
        setVal(state.index)
    }, [state.index]);

    function _pressHandler(route) {

        if (route == 'drawer') {
            navigation.openDrawer()
        } else {
            navigate(route);
        }
    }

    return (
        <MainContainer  >
            <TabContainer >
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => _pressHandler('products')}>
                    {/* <ProductsIcon selected={val == 0} /> */}
                    <Ionicons style={{}} name={'ios-basket'} size={20} color={val == 0 ? '#34368d' : 'rgb(99, 99, 102)'} />
                    <Info selected={val == 0}>{'Produtos'}</Info>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => _pressHandler('orders')}>
                    <Ionicons style={{ paddingTop: 2 }} name={'ios-cart'} size={20} color={val == 1 ? '#34368d' : 'rgb(99, 99, 102)'} />
                    <Info selected={val == 1}>{'Encomendas'}</Info>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => _pressHandler('homepage')}>
                    <Ionicons style={{}} name={'ios-card'} size={40} color={val == 2 ? '#34368d' : 'rgb(99, 99, 102)'} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => _pressHandler('stores')}>
                    <Ionicons style={{}} name={'ios-home'} size={20} color={val == 3 ? '#34368d' : 'rgb(99, 99, 102)'} />
                    <Info selected={val == 3}>{'Lojas'}</Info>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => _pressHandler('drawer')}>
                    <Ionicons style={{}} name={'ios-reorder'} size={40} color={val == 4 ? '#34368d' : 'rgb(99, 99, 102)'} />
                </TouchableOpacity>
            </TabContainer>
        </MainContainer>
    );
}

export default BottomTabBar;