
import React, { useState } from 'react';
import './Contacto.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario, por ejemplo, enviar un correo electrónico o almacenar los datos.
    console.log('Formulario enviado:', formData);
    // Puedes resetear el estado del formulario después de manejar los datos si es necesario.
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <div className='Box_contact'>
  <div className='Contat'>
    <h1>For More Details</h1>
    <h1>Contact Me!</h1>
  </div>

  <div className='text_contact'>
    <p>
      Thank you for visiting my portfolio. 
      I'm excited to connect with you. If you are interested in discussing potential projects, creative collaborations, or if you are looking for new talents for your team,
      I would love to hear from you!
    </p>
  </div>
</div>

<div className='form'>
  <div className="MailBox">
    <form onSubmit={handleSubmit} className="ContactForm">
      <div className="formGroup">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="formGroup">
        <label htmlFor="message">Comment or Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</div>

      {/* <div className='Box_contact'>
      
         <div className='Contat'>
            <h1>For More Details</h1>
              <h1>Contact Me!</h1>
          </div>

          <div className='text_contact'>
            <p>
            Thank you for visiting my portfolio. 
            I'm excited to connect with you. If you are interested in discussing potential projects, creative collaborations, or if you are looking for new talents for your team,
            I would love to hear from you!
            </p>
          </div>

       </div>
          

      <div className='form'>
        <div className="MailBox">
          <form onSubmit={handleSubmit}>
           
            <div className="ContactForm">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

        
            <div className="ContactForm">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="ContactForm">
              <label htmlFor="message">Comment or Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div> */}
    </>
  );
}