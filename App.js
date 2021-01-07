import React from 'react';
import Home from './screens/Home';
import Section from './screens/Section';
import ProductDetails from './screens/ProductDetails';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import shoppingReducer from './store/reducer';

const store = createStore(shoppingReducer);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home Depot"
            component={Home}
            options={{
              title: 'Welcome to Home Depot',
              headerStyle: {
                backgroundColor: '#C2C1C2',
              },
              headerTitleAlign: 'center',
            }}
          />

          <Stack.Screen
            name="Section"
            component={Section}
            options={{
              title: 'Section',
              headerStyle: {
                backgroundColor: '#C2C1C2',
              },
              headerTitleAlign: 'center',
            }}
          />

          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
