import React from 'react'
import './nav.css'
import {RiHome7Line} from 'react-icons/ri'
import {SiAboutdotme} from 'react-icons/si'
import {AiTwotoneExperiment} from 'react-icons/ai'
import {TbMailbox, TbSectionSign} from 'react-icons/tb'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { useState } from 'react'
import {MdLogin} from 'react-icons/md'
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#');
  window.addEventListener('scroll',()=> {
    activeNav = setActiveNav()
  })
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHome7Line/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiTwotoneExperiment/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMailbox/></a>
      

    </nav>
  )
}

export default Nav
//<a ><MdLogin /></a> we reserve this button to swtich between the client web and admin page
// something wrong with react router so i will do this later 