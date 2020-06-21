import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../../pages/accountScreen'

export default function RoutesAccountScreens() {
    const AppStack = createStackNavigator();

    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="AccountScreen" component={AccountScreen} />
        </AppStack.Navigator>
    );
}