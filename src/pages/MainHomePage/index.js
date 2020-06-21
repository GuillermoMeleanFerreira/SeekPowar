import * as React from 'react';
import {
    Image,
    Text,
    View,
    StatusBar,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator,
    TouchableWithoutFeedback,
    Linking
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';


import styles from './styles';
import broken_image from '../../assets/broken_image.png';
import cartapImg from '../../assets/cartão-new.png';
import homepageBackground from '../../assets/home-page-background.png';
import no_image_background from '../../assets/nobackImg.png';

const SLIDER_WIDTH = Dimensions.get('window').width;

export default function HomeScreen() {

    return (
        <ImageBackground
            style={styles.container}
            source={homepageBackground}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, flexDirection: 'column', paddingBottom: 20, marginHorizontal: SLIDER_WIDTH * 0.025 }}>
                <StatusBar backgroundColor={"#34368d"} barStyle='light-content' />



            </ScrollView>
        </ImageBackground >
    );
}