import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import AirBnBImg from "../assets/ImgProjects/AirBnB.webp"


export default function AirBnB() {
  return (
    <Card sx={{ maxWidth: 400 , backgroundColor: "rgb(45, 45, 45)", color: "aliceblue"}}>
      <CardMedia
        component="img"
        alt=""
        height="200"
        image={AirBnBImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Full Stack AirBnB App
        </Typography>
        <Typography variant="body2" sx={{ color: 'aliceblue' }}>
        using HTML, CSS, JavaScript, Node.js, Express.js, EJS Templates, MongoDB models,
        Mongoose, and error handling. Implement middleware for handling errors and invalid data across routes. A web
        application where users can search, list and manage rental listings similar to Airbnb which is based on Model-ViewController (MVC) architecture. 
        </Typography>
      </CardContent>
    </Card>
  );
}
