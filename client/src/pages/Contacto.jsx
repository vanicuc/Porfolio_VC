import React, { useState } from "react";
import "./Contacto.css";



export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   console.log("Formulario enviado:", formData);
  //   setFormData({ name: "", email: "", phone: "", message: "" });
    
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Formulario enviado:", formData);
  
    try {
      const response = await fetch('http://localhost:5173/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', // Incluir credenciales
      });
  
      if (response.ok) {
        console.log('Correo enviado con éxito');
      } else {
        const errorMessage = await response.text();
        console.error('Error al enviar el correo:', errorMessage);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="form_wrap">
        <div className="cantact_info">
          <div className="info_title">
            <span className="fa fa-user-circle"></span>
            <h2>
              For More Details <br />
              Contact Me!
            </h2>
          </div>
          <div className="info_items">
            <p>
              <span className="fa-mobile"></span>Thank you for visiting my
              portfolio
            </p>
            <p>
              <span className="fa-mobile"></span>I'm excited to connect with
              you. If you are interested in discussing potential projects,
              creative collaborations, or if you are looking for new talents for
              your team, I would love to hear from you!
            </p>
            <img src="porfolio.jpeg" width={350} />
          </div>
        </div>

        <form action="" className="form_contact" onSubmit={handleSubmit}>
          <h2>Send a message</h2>
          <div className="user_info">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phone">Mobile</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email *</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <input type="submit" value="Submit" id="btnSend" />
          </div>
        </form>
      </div>
    </>
  );
}
