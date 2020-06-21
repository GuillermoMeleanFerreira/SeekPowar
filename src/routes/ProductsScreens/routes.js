import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FamilyProductsScreen from '../../pages/familyProductsScreen'

export default function RoutesProductScreens() {
    const AppStack = createStackNavigator();

    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="FamilyProductsScreen" component={FamilyProductsScreen} />
        </AppStack.Navigator>
    );
}