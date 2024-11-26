import React from 'react'
import "./Projects.css"
import Button from '@mui/material/Button';

import AirBnB from './AirBnB'
import Spotify from './Spotify'
import DashBoard from './Dashboard'
import WeatherApp from './WeatherApp'
import ToDoApp from './ToDoApp'
function Projects() {
  return (
    <div className='projectsContainer'>
        <h1>Projects</h1>
        <span className='project'>
            <AirBnB/> 
            <Spotify/>
            <DashBoard/>
            <WeatherApp/>
            <ToDoApp/>
        </span>       
        <div className="viewmore">
          <Button variant="contained" sx={{backgroundColor: "aliceblue", color: "black" , padding: 2, margin: 10}}> 
            <a href="https://github.com/gauravyas25?tab=repositories">View My Projects</a> 
          </Button>
        </div>
    </div>
  )
}

export default Projects