import React from 'react'
import "./Hero.css"
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import HeroImg from "../assets/HeroImg.jpg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Resume from "./Gaurav Vyas Resume Web Developer.pdf"

function Hero() {
  return (
    <section className='HeroContainer'>
        <div className="hero">

            <div className="heroImg">
                <img className="himg" src={HeroImg} alt="" />
            </div>

            <div className="info">
                <h1>I'm </h1>
                <h1>Gaurav Vyas</h1>
                <h2>Full Stack Web Developer</h2>
            </div>

            <span className='socials'>
                <a href=" https://www.linkedin.com/in/gauravvyas33"><LinkedInIcon className='icons' color='white' fontSize='15px' /></a>
                <a href="https://github.com/gauravyas25"><GitHubIcon color='white' fontSize='15px'/></a>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<Button variant="text" color='#e3f2fd' style={{margin : 0}} startIcon={<DescriptionIcon/>} href={Resume}></Button>
            </span>

            <div className="description">
                <p>An engineering student and an enthusiastic MERN Stack Developer who strives to create user friendly full stack websites.
                    Passionate for learning new-edge technologies. Having good knowledge about the Front End and Back End with Databases
                    management.
                </p>
            </div>


        </div>
        
<br />
       
    </section>


  )
}

export default Hero