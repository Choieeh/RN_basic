import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Rain: {
		iconName : "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "Haze",
		subtitle: "just don't go outside"
				  
	},
/*	Thunderstorm: {
		iconName : "",
		gradient: ["",""]
	},
	Drizzle: {
		iconName : "",
		gradient: ["",""]
	},
	Rain: {
		iconName : "",
		gradient: ["",""]
	},
	Snow: {
		iconName : "",
		gradient: ["",""]
	},
	Atmosphere: {
		iconName : "",
		gradient: ["",""]
	},
	Clear: {
		iconName : "",
		gradient: ["",""]
	},
	Clouds: {
		iconName : "",
		gradient: ["",""]
	},
	Dust: {
		iconName : "",
		gradient: ["",""]
	}*/
}

export default function Weather({temp, condition}){
	console.log(condition);
	return (
		
		<LinearGradient
        // Button Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
			<StatusBar barStyle="light-content"/>
			<View style={styles.halfcontainer}>
				<MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
				<Text style={styles.temp}>{temp}º</Text>
			</View>
			<View style={[styles.halfcontainer, styles.textContainer]}>
				<View>
					<Text style={styles.title}>{weatherOptions[condition].title}</Text>
					<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
				</View>

			</View>
		</LinearGradient>	
		);
}

Weather.propTypes = {
	temp:PropTypes.number.isRequired,
	condition:PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Dust"]).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent : "center",
		alignItems: "center"
	},
	temp: {
		fontSize:42,
		color: "white"
	},
	halfcontainer: {
		flex:1,
		justifyContent : "center",
		alignItems: "center"
	},
	title: {
		color: "white",
		fontSize: 44,
		fontWeight: "300",
		marginBottom: 10
	},
	subtitle: {
		color: "white",
		fontWeight: "600",
		fontSize: 24
	},
	textContainer: {
		paddingHorizontal:20,
		alignItems: "flex-start"
	}
})