import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TOdoImg from "../assets/ImgProjects/ToDo.webp"

export default function ToDoApp() {
  return (
    <Card sx={{ maxWidth: 400 , backgroundColor: "rgb(45, 45, 45)", color: "aliceblue" }}>
      <CardMedia
        component="img"
        alt=""
        height="200"
        image={TOdoImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ToDo App using ReactJS
        </Typography>
        <Typography variant="body2" sx={{ color: 'aliceblue' }}>
        Built with React.js , MaterialUI, features a sleek interface with a Navbar and Sidebar for easy navigation, task management, and Circular Progress Bar to visually track task completion.
        </Typography>
      </CardContent>
    </Card>
  );
}
