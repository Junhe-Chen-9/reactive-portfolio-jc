import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGlitch} from 'react-icons/si'
const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/junhe-chen-a81201219/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Junhe-Chen-9" target="_blank"><BsGithub/></a>
        <a href="https://glitch.com/@Junhe-Chen-9" target="_blank"><SiGlitch/></a>
    </div>
  )
}

export default HeaderSocial