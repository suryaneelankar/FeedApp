/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import FeedApp from './Feed/feedApp';
import OTPScreen from './Feed/OTPScreen';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

function HomeScreenNew() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator

        screenOptions={
          {
            headerShown: false
          }
        }
      >
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="FeedApp" component={FeedApp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
