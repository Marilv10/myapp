import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { PureComponent } from 'react';
import { Text, View, Alert, Button, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './LoginStyle';

export default class Login extends PureComponent {
	
	alerta=()=>{
		Alert.alert("Error!!");
	}

	render() {
		
		return (
		<View>			
		</View>
		);
	}
	
}

 
Login.propTypes = {
	// data: PropTypes.array
}

Login.defaultProps = {
	// data: []
}


