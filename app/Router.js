import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from 'ejercicio1/app/screens/LoginScreen';
import HomeScreen from 'ejercicio1/app/screens/HomeScreen';

const NavStack = createStackNavigator({
	LoginScreen: {screen: LoginScreen},
	HomeScreen: {screen: HomeScreen}
});

export default createAppContainer(NavStack);
