import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OrderListLayout from './../../pages/orderListLayout'
import OrderDetailsLayout from './../../pages/orderDetailsLayout'

export default function RoutesOrderScreens() {
    const AppStack = createStackNavigator();

    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="OrderListLayout" component={OrderListLayout} />
            <AppStack.Screen name="OrderDetailsLayout" component={OrderDetailsLayout} />
        </AppStack.Navigator>
    );
}