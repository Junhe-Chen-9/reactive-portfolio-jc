import React from 'react'
import Resume from '../../assets/CV_Junhe_Chen.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Leave A Message</a>
    </div>
  )
}

export default CTA