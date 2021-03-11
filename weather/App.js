import React from 'react';
import {Alert} from "react-native";
import Loading from "./loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "7938719976d75f63796340b245b10d61";

export default class extends React.Component {
	state = {
		isLoading : true
		
	};
	
	getWeather = async(latitude, longitude) => {
		const {data} = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

		);
		this.setState({isLoading:false, temp: data.main.temp})
		console.log(data);
	}

	getLocation = async() => {
		try{
			await Location.requestPermissionsAsync();
			const { coords : {latitude, longitude} } = await Location.getCurrentPositionAsync();
			this.getWeather(latitude, longitude)
			
		} catch(error){
			Alert.alert("Can't find you.", "So sad");
		}
		//Permission을 받지 못할경우 catch로 이동해서 실행
		//async await는 비동기 실행을 위한 명령어
		
	}
	componentDidMount(){
		this.getLocation();
	}
	render(){
		const { isLoading, temp } = this.state;
		return isLoading ? <Loading></Loading> : <Weather temp={Math.round(temp)}></Weather>
	}
  
}

