import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WeatherImg from "../assets/ImgProjects/WeatherImg.webp"

export default function WeatherApp() {
  return (
    <Card sx={{ maxWidth: 400 , backgroundColor: "rgb(45, 45, 45)", color: "aliceblue" }}>
      <CardMedia
        component="img"
        alt=""
        height="200"
        image={WeatherImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Weather App using ReactJS
        </Typography>
        <Typography variant="body2" sx={{ color: 'aliceblue' }}>
        A React app that provides accurate weather predictions using the OpenWeatherMap API. It tells the weather updates across various cities. MaterialUI to give the app a sleek and modern look. 
        </Typography>
      </CardContent>
    </Card>
  );
}
