import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import {WeatherCards, Navbar} from './components'
import { Typography,Grid, Select, MenuItem,InputLabel } from '@mui/material';




function App() {
  const [Weather, setWeather] = useState()
  const [Country, setCountry] = useState('Canada')
  const [numOfDays, setnumOfDays] = useState('4')
  const [url, seturl] = useState('http://api.weatherapi.com/v1/forecast.json?key=631a0075b83644718c0180918210712&q=Etobicoke&days=4&aqi=no&alerts=yes')
  var countriesjson = require('./assets/Countries.json')
  
  useEffect(()=>{
      fetch(url)
          .then(response => response.json())
          .then(data => setWeather(data))
  },[url])
  
  

  if(Weather){
    
  return (<div>
    <InputLabel>Please Select a Country</InputLabel>
    <Select value = {Country} fullWidth onChange = {(e)=>{
      seturl('http://api.weatherapi.com/v1/forecast.json?key=631a0075b83644718c0180918210712&q='.concat(e.target.value).concat('&days=').concat(numOfDays).concat('&aqi=no&alerts=yes'))
      setCountry(e.target.value)
      }}>
      {countriesjson.map((country)=>(
        <MenuItem key = {country.code} value = {country.name}>
          {country.name}
        </MenuItem>
      ))}
                                
    </Select>
    <WeatherCards Weather = {Weather}></WeatherCards>
    </div>
  )}else{
    return(<div></div>)
  }
}

export default App;
