import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './LoginScreenStyle';
import { useNavigation } from '@react-navigation/native';

function LoginScreen ({ navigation: { navigate } }) {
	const navigation = useNavigation();
	return (
		<ImageBackground source={require('ejercicio1/assets/fondo2.jpg')} style={styles.container}>
	        <View style={styles.header}>
	          <View style={styles.headerLeft}>
	            <Image source ={require('ejercicio1/assets/logo.png')} style={styles.logo}/>
	          </View>
	          <View style={styles.headerRight}>
	            <Text>My App</Text>
	          </View>
	        </View>
	        <View style={styles.body}>
	          <Text>Bienvenido</Text>
	          	
	          	<View>
					<View style={styles.data}>
						<Text>Ingresa tus datos de inicio de sesión</Text>
						<Text>Usuario:</Text>
						<TextInput 
							placeHolder="Escribe tu usuario"
							maxLength={10}
							style={styles.textInput}/>
					
						<Text>Contraseña:</Text>
						<TextInput 
							placeHolder="Escribe tu contraseña"
							maxLength={10}
							style={styles.textInput}/>
						<View style={styles.btnLogin}>
							<Button 
							title="Ingresar"
							onPress={() => navigate('HomeScreen')} 
							></Button>
					</View>
				</View>
			</View>
	        <StatusBar style="auto" />
	        </View>
	        
	    </ImageBackground>
	);
}

export default LoginScreen;


