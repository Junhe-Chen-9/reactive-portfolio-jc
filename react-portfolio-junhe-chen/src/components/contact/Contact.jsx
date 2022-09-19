import React,{ useRef } from 'react'
import './contact.css'
import {BiMailSend} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('cslajlgskglsn', 'template_ye2g6bj', form.current, 'mVW1JcqNt-MWwU1Zl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  };
  return (
    <section id='contact'>
      <h5>Getting In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <BiMailSend className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>contact@junhechen.com</h5>
            <a href="mailto:contact@junhechen.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Mobile</h4>
            <h5>+1 (917)-783-1196</h5>
            <a href="tel:+19177831196" target="_blank">Call Now</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email Address' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact