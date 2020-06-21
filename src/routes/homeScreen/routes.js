import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainHomePage from './../../pages/MainHomePage'

export default function RoutesOrderScreens() {
    const AppStack = createStackNavigator();

    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="MainHomePage" component={MainHomePage} />
        </AppStack.Navigator>
    );
}