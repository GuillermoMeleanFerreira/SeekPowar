import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, Image, Linking, Platform } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Feather, Ionicons } from '@expo/vector-icons';

import styles from './styles';
import LoadingView from '../../Components/loadingView';

import db_getAllStores from '../../services/store';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

export default function SettingsScreen() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [storeList, setStoreList] = useState([]);

    const [isLoadingModalVisible, setLoadingModalVisible] = useState(false);

    async function getAllStores() {
        var response = await db_getAllStores();
        if (response != null && response.length > 0) {
            setStoreList(response);
            setActiveIndex(0);
            setLoadingModalVisible(false)
        }
    }

    useEffect(() => {
        getAllStores();
    }, [])

    state = {
        activeIndex: 0
    }

    function getImage(index) {

        var Obj = storeList[index];

        if (Obj != null) {
            return Obj.defaultImg;
        }
    }

    function _handler() {
        alert('carregou')
    }

    function _getStoreContent(index) {
        var Obj = storeList[index];

        return (
            <View >
                <LoadingView isModalVisible={isLoadingModalVisible} />
                {Obj != null &&
                    <View>
                        {Obj.Title != null && <Text style={styles.titleText}>{Obj.Title}</Text>}
                        {Obj.Address != "" && <View style={styles.textBoxContainer}>
                            <View style={styles.iconView}>
                                {/* <Ionicons style={{}} name={'ios-location-outline'} size={25} /> */}
                                <Feather name="map-pin" size={25} style={{ textAlign: 'center' }} color={"#bf222b"}></Feather>
                            </View>
                            <View>
                                <Text style={styles.titlePropertyText}>
                                    Morada:
                            </Text>
                                <Text onPress={() => {
                                    Linking.openURL(Platform.select({
                                        ios: `maps:0,0?q=${Obj.Address}`,
                                        android: `geo:0,0?q=${Obj.Address}`,
                                    }))
                                }} style={styles.descriptionPropertyText}>
                                    {Obj.Address}
                                </Text>
                            </View>
                        </View>}
                        {Obj.Phone != '' &&
                            <View style={styles.textBoxContainer}>
                                <View style={styles.iconView}>
                                    <Ionicons style={{ textAlign: 'center' }} name={'ios-call'} size={25} color={'green'} />
                                </View>
                                <View>
                                    <Text style={styles.titlePropertyText}>
                                        Telefone:
                        </Text>
                                    <Text onPress={() => { Linking.openURL(`tel:${Obj.Phone}`) }} style={styles.descriptionPropertyText}>
                                        (+351) {Obj.Phone}
                                    </Text>
                                </View>
                            </View>
                        }
                        {Obj.mobilePhone != '' &&
                            <View style={styles.textBoxContainer}>
                                <View style={styles.iconView}>
                                    <Ionicons style={{ textAlign: 'center' }} name={'ios-phone-portrait'} size={25} color={'green'} />
                                </View>
                                <View style={styles.textView}>
                                    <Text style={styles.titlePropertyText}>
                                        Telemóvel:
                                </Text>
                                    <Text onPress={() => { Linking.openURL(`tel:${Obj.mobilePhone}`) }} style={styles.descriptionPropertyText}>
                                        (+351) {Obj.mobilePhone}
                                    </Text>
                                </View>
                            </View>
                        }
                    </View>}
            </View>)
    }

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>As Nossas Lojas</Text>
            </View>
            <View style={styles.swiperContainer}>
                <Carousel
                    containerCustomStyle={styles.carouselContainer}
                    ref={(c) => { }}
                    data={storeList != null ? storeList : []}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    renderItem={({ item, index }) =>
                        <View style={Platform.OS === 'ios' ? styles.swiperBoxiOS : styles.swiperBoxAndroid}>
                            <Image
                                style={styles.logoImage}
                                source={{
                                    uri: getImage(index),
                                }}
                                onPress={_handler}>
                            </Image>
                        </View>
                    }
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    layout={'default'}
                />
            </View>
            <View style={styles.textContainer}>
                {_getStoreContent(activeIndex)}
            </View>
            <View style={styles.paginationContainer}>
                <Pagination
                    dotsLength={storeList != null ? storeList.length : 0}
                    activeDotIndex={activeIndex}
                    containerStyle={{}}
                    dotStyle={{}}
                    inactiveDotStyle={{}}
                    inactiveDotOpacity={0.2}
                    inactiveDotScale={0.6}
                />
            </View>
        </View>
    )
}