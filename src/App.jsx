import React from 'react';
import './App.css';

import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';

function App() {
  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <AppBar position="sticky" sx={{ background: 'rgb(20, 20, 20)', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-around'}}>
          <Box display="flex" >
            <Button color="inherit" onClick={() => handleScrollTo('hero')} sx={{ fontSize: '12px', fontWeight: 'bold' }}>
              Home
            </Button>
            <Button color="inherit" onClick={() => handleScrollTo('skills')} sx={{ fontSize: '12px', fontWeight: 'bold' }}>
              Skills
            </Button>
            <Button color="inherit" onClick={() => handleScrollTo('projects')} sx={{ fontSize: '12px', fontWeight: 'bold' }}>
              Projects
            </Button>
            <Button color="inherit" onClick={() => handleScrollTo('education')} sx={{ fontSize: '12px', fontWeight: 'bold' }}>
              Education
            </Button>
            <Button color="inherit" onClick={() => handleScrollTo('contact')} sx={{ fontSize: '12px', fontWeight: 'bold' }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <div id="hero">
        <br /><br /><br />
        <Hero />
      </div>
      <div id="skills">
        <br /><br />
        <Skills />
      </div>
      <br /><br /><br /><br /><br />
      <div id="projects">
        
        <Projects />
      </div>
      <div id="education">
        <br /><br />
        <Education />
      </div>
      <div id="contact">
        <br /><br /><br /><br /><br /><br />
        <Contact />
      </div>
      <div id="footer">
        <br /><br /><br />
        <div className="fab">
        <Fab
          variant="extended"
          size="med"
          color="black"
          onClick={handleScrollUp}
          style={{ marginBottom: 50 }}
        >
          <NavigationIcon />
        </Fab>
      </div>
        <Footer />
      </div>

     
      
    </div>
  );
}

export default App;
