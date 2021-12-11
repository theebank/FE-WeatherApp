import React from 'react'
import { CircularProgress,Card,CardMedia,CardContent,CardActions, ListItem, Typography,Grid } from '@mui/material'
import { ClassNames } from '@emotion/react';


const WeatherCard = ({Weather, today, day, date}) => {
    
    const styles = {
        card: {
          maxWidth: 500,
        },
        media: {
          height: 0,
          paddingTop: '100%', // 16:9
        },
        img : {
            height: 100,
        },
      };
    if(Weather){
        if(today){
            return (
                 <Card style={styles.card}>
                      <Grid container spacing={0} direction="column" alignItems="center" justify="center">             
                        <Grid item xs = {3}style={{ display: "flex",  alignItems: "center" }}>
                            <CardContent style = {styles.data}>
                                <Typography>{Weather.location.name},</Typography>
                                <Typography>{Weather.location.region},</Typography>
                                <Typography>{Weather.location.country}</Typography>
                            </CardContent>
                            <img src = {Weather.current.condition.icon} style = {styles.img}/>
                            <CardContent style = {styles.data}>
                                <Typography>{Weather.current.temp_c}°C, Feels Like {Weather.current.feelslike_c}</Typography>
                                <Typography>{Weather.current.wind_kph}km/h {Weather.current.wind_dir}</Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
        )
        }else{
            if(day && date){
                
            return( 
                <Card style={styles.card}>
                      <Grid container spacing={0} direction="column" alignItems="center" justify="center">             
                        <Grid item xs = {3}style={{ display: "flex",  alignItems: "center" }}>
                            <CardContent style = {styles.data}>
                                <Typography>{date}</Typography>
                            </CardContent>
                            <img src = {day.condition.icon} style = {styles.img}/>
                            <CardContent style = {styles.data}>
                                <Typography>{day.maxtemp_c}°C</Typography>
                                <Typography>{day.maxwind_kph}km/h</Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            )
            }
        else{
            return(
                <div><h1></h1></div>
            )
        }
    }
    }else{
        return(
            <div><h1>yeah</h1></div>
        )
    }
    
}

export default WeatherCard
