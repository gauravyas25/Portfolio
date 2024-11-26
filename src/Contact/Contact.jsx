import React from 'react'
import "./Contact.css"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

function Contact() {
  return (
    <div className='contact'>
        <h1>Contact</h1>

        <p>Get in Touch at</p>
        <div className="continfo">
            <div className="cinfo">
                <MailIcon sx={{fontSize: 30, alignItems: "center"}}/>
                <p><a href="mailTo:gcvyas2514@gmail.com">gcvyas2514@gmail.com</a></p>
            </div>
            <div className="cinfo">
                <LinkedInIcon sx={{fontSize: 35,  alignItems: "center" }}/>
                <p><a href="https://www.linkedin.com/in/gauravvyas33/">LinkedIn</a></p>
            </div>
        </div>

        {/* <form action="">
            <div className="formGroup">
                <label htmlFor="name" hidden> Name</label>
                <input type="text" name="name" id="name" placeholder='Enter your Name' required/>
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden> Email</label>
                <input type="text" name="email" id="email" placeholder='Enter your Eame' required/>
            </div>
            <div className="formGroup">
                <label htmlFor="msg" hidden> Message</label>
                <textarea type="text" name="msg" id="msg" placeholder='Enter your Message' required/>
            </div>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </form> */}
        
       
    </div>
  )
}

export default Contact