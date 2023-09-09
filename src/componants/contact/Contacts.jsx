import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./contact.css"
const Contacts = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vu21pfl', 'template_xxnvkgr', form.current, 't1I9gB6ZjqyojwTcm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
  return (
    <div className='container1'>
    <section className='contactsection' >
        <div style={{marginTop:"7%"}}>
            <h2 className='--text-center'>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} className='--form-control --card --flex-center --dir-column'>
                <input type='text' placeholder='Full Name' name='user_name' required />
                <input type='email' placeholder='Email' name='user_email' required />
                <input type='text' placeholder='Subject' name='subject' required />
                <textarea name="message" cols="30" rows="5"></textarea>
                <button type='submit' className='--btn'>Send Message</button>
            </form>
        </div>
    </section >
    </div>
  )
}

export default Contacts