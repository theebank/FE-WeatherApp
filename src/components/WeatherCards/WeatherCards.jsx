import React from 'react'
import { Grid,Typography } from '@mui/material'
import { WeatherCard } from '..'

const WeatherCards = ({Weather}) => {
    console.log(Weather)
    return (
        <main>
            <div>
      <Typography>Today's Weather</Typography>
      
        <WeatherCard Weather = {Weather} today = {true} />                     
        <WeatherCard Weather = {Weather} day = {Weather.forecast.forecastday[0]}/>
        <Typography> Upcoming Forecast</Typography>
        {Weather.forecast.forecastday.map(({day,date}) => {          
           return( <WeatherCard Weather = {Weather} today = {false} day = {day} date = {date}/>          )
        })}
      </div>
      
    </main> 
    )
}

export default WeatherCards
