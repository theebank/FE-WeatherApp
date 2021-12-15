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
        <Grid container justify="center" spacing = {5}>
        {Weather.forecast.forecastday.map(({day,date}) => {          
             
           return(<Grid item key = {date} xs = {12} sm = {6} md = {4} lg = {3}>
                <WeatherCard Weather = {Weather} today = {false} day = {day} date = {date}/>          
                </Grid>
                )
           
        })}
        </Grid>
      </div>
      
    </main> 
    )
}

export default WeatherCards
