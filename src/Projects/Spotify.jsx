import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SpotifyImg from "../assets/ImgProjects/Soptify.webp"

export default function Spotify() {
  return (
    <Card sx={{ maxWidth: 400 , backgroundColor: "rgb(45, 45, 45)", color: "aliceblue" }}>
      <CardMedia
        component="img"
        alt=""
        height="200"
        image={SpotifyImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Spotify UI Clone
        </Typography>
        <Typography variant="body2" sx={{ color: 'aliceblue' }}>
        A project aimed at replicating the visual design and layout of the popular music streaming service, Spotify.
        </Typography>
      </CardContent>
      
    </Card>
  );
}
