import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {
 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [message,setMessage] = useState("");
 console.log(name,email,message)

 const contactFormHandler = (e) => {
   e.preventDefault();
 }
  return (
    <div className='contact'>
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={contactFormHandler}>
          <Typography variant='h4'>Contact Us</Typography>
          <input type="text" 
          placeholder='Name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <input type="email" 
          placeholder='Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <textarea name="" 
          placeholder='Message'
          cols="30" 
          rows="10"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant='contained' type='submit'>Send</Button>
        </form>
      </div>
    </div>
  )
}

export default Contact;