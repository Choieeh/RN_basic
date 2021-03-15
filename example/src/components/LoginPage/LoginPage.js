import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
//import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { LinearGradient } from 'expo-linear-gradient';

export default function LoginPage(){
	return (
		<View style={styles.container}>
			<View style={styles.Logo}>
				<Text style={styles.text}>DUO BODY</Text>
			</View>
			<View style={styles.Login}>
				<input></input>
				<input></input>
				<button type = "submit">
					<MaterialCommunityIcons name={mdi-account} size={10} color="white" />Sign IN
				</button>
				<Text style={styles.subtext}>
					Don't have an account?
				</Text>
				<button type = "submit">
					Sign UP
				</button>
			</View>
		</View>
	);
	
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#2BAE56',
		alignItems: 'center',
		justifyContent: 'center'
	},
	Logo: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	Login: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize:50,
		fontWeight: 'bold',
		color: "white"
	},
	subtext: {
		fontSize:20,
		fontWeight: 'bold',
		color: "white"
	}
	
})