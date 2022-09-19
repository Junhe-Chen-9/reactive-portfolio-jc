import React from 'react'
import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Here Are My</h5>
      <h2>Experiences</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> &#60; / Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <h4> &#60; HTML &#62; </h4>
            <small>...</small>
            </article>
            <article className="experience__details">
            <h4> &#60; CSS &#62; </h4>
            <small>...</small>
            </article>
            <article className="experience__details">
            <h4> &#60; JavaScript &#62; </h4>
            <small>...</small>
            </article>
          </div>

        </div>

        <div className="experience__backend">
          <h3> &#38; &#38;  Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <h4> &#60; Java &#62; </h4>
              <small>...</small>
            </article>
            <article className="experience__details">
              <h4> &#60; C/C++ &#62; </h4>
              <small>...</small>
            </article>
            <article className="experience__details">
              <h4> &#60; MySQL &#62; </h4>
              <small>...</small>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience