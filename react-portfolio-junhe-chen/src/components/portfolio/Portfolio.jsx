import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
// we are hard coding json file for now, but this can be full stack website with portal we will be doing later on 
// then we can update things from the portal

const data = [{
  id: 1,
  image:IMG1,
  title:'Cool Guys Hotel Reservation',
  github:"https://github.com/Junhe-Chen-9/CoolGuysHotelReservation"
},{
  id: 2,
  image:IMG2,
  title:'Reactive Portfolio',
  github:"https://github.com/Junhe-Chen-9/reactive-portfolio-jc"
}]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Past Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github}) =>{
          return(
            <article key = {id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt="coolguyshotelreservation" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
            </div>
          </article>
          )
        })
      }




        
      </div>
    </section>
  )
}

export default Portfolio