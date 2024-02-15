// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Suite from './Suite';
import Controle from './Controle'
import LightingSystemPage from './LightingSystemPage';
import TemperatureControlPage from './TemperatureControlPage';
import SecurityPage from './SecurityPage';
import Wifi from './Wifi';
import Store from './Store';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
  </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Homescreen" component={Suite} />
        <Stack.Screen name="Controle" component={Controle} />
        <Stack.Screen name="LightingSystemPage" component={LightingSystemPage} />
        <Stack.Screen name="TemperatureControlPage" component={TemperatureControlPage} />
        <Stack.Screen name="SecurityPage" component={SecurityPage} />
        <Stack.Screen name="Wifi" component={Wifi} />
        <Stack.Screen name="Store" component={Store} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;