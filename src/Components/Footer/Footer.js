import React from 'react'
import './Footer.css';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="footer">
    <a href = "fjcarrozzino@gmail.com"><MailIcon /> fjcarrozzino@gmail.com</a>
    <a href="https://www.linkedin.com/in/francisco-javier-carrozzino-315a6914a/" target="_blank" rel="noreferrer"><LinkedInIcon /> My LinkedIn</a>
    <a href="https://github.com/fjcarrozzino" target="_blank" rel="noreferrer"><GitHubIcon /> My GitHub</a>
</div>
  )
}

export default Footer