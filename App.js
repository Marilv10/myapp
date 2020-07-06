import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import NavNavigation from './app/Router';
import LoginScreen from 'ejercicio1/app/screens/LoginScreen'

class App extends React.Component {
  render(){
    return (
      <LoginScreen/>
    );
  }
}

export default App;


const styles = StyleSheet.create({
  
 
});
