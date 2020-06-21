import 'intl'
import 'intl/locale-data/jsonp/pt-PT'
import { Provider } from 'react-redux'

import store from './src/store'

import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { Colors } from './src/styles';

import MainStack from './src/config/navigation';
import NewVersionIndicator from './src/pages/newVersionIndicator'
import ConnectionIndicator from './src/pages/connectionIndicator'

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLatestVersion, setIsLatestVersion] = useState(true)

  return (
    <Provider store={store}>
      <NavigationContainer style={{ flex: 1, backgroundColor: Colors.lightgray }}>
        <StatusBar backgroundColor={Colors.lightgray} barStyle='dark-content' />
        <NewVersionIndicator newVersionHandler={setIsLatestVersion} />
        <ConnectionIndicator />
        {isLatestVersion && <MainStack />}
      </NavigationContainer>
    </Provider>

  )
} 