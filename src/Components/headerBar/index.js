import React, { useState, useEffect } from 'react';
import { View, Animated, TouchableOpacity, Image } from 'react-native'

import {
    Title,
    Info,
    HeaderComponent, DrawerComponent,
} from './styles';


function HeaderBar({ title, selectShow, onPressShow, back, location, cart, pdf }) {

    const [cartList, setCartList] = useState([1]);

    const ani = new Animated.Value(1)

    useEffect(() => {
        if (cartList.length > 0) {
            Animated.sequence([
                Animated.timing(ani, {
                    toValue: 1.5,
                    duration: 80
                }),
                Animated.timing(ani, {
                    toValue: 1,
                    duration: 80
                })
            ]).start()
        }

    }, [cartList]);

    if (title == "drawer") {
        return (
            <DrawerComponent>
                <Image resizeMode={'contain'} style={{ width: 35, height: 35 }} source={require('../../assets/logo.png')} />
            </DrawerComponent>
        )
    }

    return (
        <HeaderComponent sel={selectShow}>
            {back &&
                <TouchableOpacity onPress={() => onPressShow(!selectShow)}>
                    <Image resizeMode={'contain'} style={{ width: 30, height: 20 }} source={require('../../assets/logo.png')} />
                </TouchableOpacity>
            }
            {location &&
                <TouchableOpacity onPress={() => onPressShow(!selectShow)}>
                    <Image resizeMode={'contain'} style={{ width: 30, height: 30 }} source={require('../../assets/logo.png')} />
                </TouchableOpacity>
            }
            {!back && !location &&
                <View style={{ width: 30, height: 30 }} />
            }
            <Title >{title}</Title>

            {cart &&
                <TouchableOpacity onPress={() => { }}>
                    <View style={{ width: 30, height: 30, alignItems: 'flex-end' }}>
                        <Image resizeMode='contain' style={{ position: 'absolute', bottom: 0, left: 0, width: 25, height: 25 }} source={require('../../assets/logo.png')} />
                        <Animated.View style={{ transform: [{ scaleY: ani }, { scaleX: ani }], height: 17, width: 17, justifyContent: 'center', borderRadius: 10, backgroundColor: '#333' }}>
                            <Info>{cartList.length}</Info>
                        </Animated.View>
                    </View>
                </TouchableOpacity>
            }
            {!cart &&
                <View style={{ width: 30, height: 30 }}></View>
            }
        </HeaderComponent>
    );
}



function areEqual(prevProps, nextProps) {
    return prevProps.selectShow == nextProps.selectShow && prevProps.title == nextProps.title
}

export default React.memo(HeaderBar, areEqual)