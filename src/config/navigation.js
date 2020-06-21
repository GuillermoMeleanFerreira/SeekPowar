import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../pages/login'

import RoutesProductScreens from '../routes/ProductsScreens/routes';
import OrdersScreen from '../routes/OrdersScreens/routes';
import HomeScreen from '../routes/homeScreen/routes';
import AccountScreen from '../routes/accountScreen/routes';

import StoresScreen from '../routes/storesScreen';
import SettingsScreen from '../routes/settingsScreen';
import DrawerNavigator from '../../src/Components/drawerNavigator';
import BottomTabBar from '../../src/Components/bottomTabBar';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator bottomTab
            initialRouteName="homepage"
            tabBarOptions={{
                activeTintColor: '#35398c',
                inactiveTintColor: 'gray',
            }}
            tabBar={(props) => <BottomTabBar {...props} />}
        >
            <Tab.Screen name="products" component={RoutesProductScreens} />
            <Tab.Screen name="orders" component={OrdersScreen} />
            <Tab.Screen name="homepage" component={HomeScreen} />
            <Tab.Screen name="stores" component={StoresScreen} />
            <Tab.Screen name="settings" component={SettingsScreen} />
            <Tab.Screen name="account" component={AccountScreen} />
        </Tab.Navigator>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} drawerPosition={'right'} drawerContent={(props) => <DrawerNavigator {...props} />}>
            <Drawer.Screen name="MainTab" component={MyTabs} />
        </Drawer.Navigator>
    )
}

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyDrawer" component={MyDrawer} />
        </Stack.Navigator>
    );
}

export default createAppContainer(
    createSwitchNavigator({
        App: MyStack,
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                tabBarVisible: false
            }
        }
    })
)