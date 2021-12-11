import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import {WeatherCard, Navbar} from './components'
import { Typography,Grid } from '@mui/material';
import WeatherCards from './components/WeatherCards/WeatherCards';


function App() {
  const [Weather, setWeather] = useState()
  useEffect(()=>{
      fetch('http://api.weatherapi.com/v1/forecast.json?key=631a0075b83644718c0180918210712&q=Etobicoke&days=7&aqi=no&alerts=yes')
          .then(response => response.json())
          .then(data => setWeather(data))
  },[])
  

  if(Weather){
  return (
    <WeatherCards Weather = {Weather}></WeatherCards>
  )}else{
    return(<div></div>)
  }
}

export default App;
