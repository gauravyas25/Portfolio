import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DashBoardImg from "../assets/ImgProjects/DashBoard.webp"

export default function DashBoard() {
  return (
    <Card sx={{ maxWidth: 400 , backgroundColor: "rgb(45, 45, 45)", color: "aliceblue"}}>
      <CardMedia
        component="img"
        alt=""
        height="200"
        image={DashBoardImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          DashBoard using ReactJS
        </Typography>
        <Typography variant="body2" sx={{ color: 'aliceblue' }}>
        It comes with interactive charts using Recharts, smooth Circular Progress Barand handy Widgets. I’ve also integrated a sleek SideBar and NavBar with MaterialUI to enhance overall look. 
        </Typography>
      </CardContent>
    </Card>
  );
}
