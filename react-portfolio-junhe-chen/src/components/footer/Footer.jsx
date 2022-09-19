import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGlitch} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JUNHE CHEN</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/junhe-chen-a81201219/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Junhe-Chen-9" target="_blank"><BsGithub/></a>
        <a href="https://glitch.com/@Junhe-Chen-9" target="_blank"><SiGlitch/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; JUNHE CHEN. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer