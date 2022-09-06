import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import {MdCastForEducation} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'
import {AiOutlineTool} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me_image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdCastForEducation className="about__icon orange"/>
              <h5>Education</h5>
              <small>B.S Computer Science</small>
              <br />
              <small>2021 - 2023</small>
            </article>
            <article className="about__card">
              <GiSkills className="about__icon red"/>
              <h5>Skills</h5>
              <small>Java</small>
              <br />
              <small>C/C++</small>
              <br />
              <small>JavaScript</small>

              
            </article>
            <article className="about__card">
              <AiOutlineTool className="about__icon blue"/>
              <h5>Working Background</h5>
              <small>Regional Manager</small>
              <br />
              <small>2018 - 2020</small>
            </article>
          </div>
          <p>Here is detali of my cover letter</p>
          <a href="#contact" className="btn btn-primary">Contact Now</a>
        </div>
      </div>
    </section>
  )
}

export default About