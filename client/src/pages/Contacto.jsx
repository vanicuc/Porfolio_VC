import React, { useState } from "react";
import "./Contacto.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // manejar la lógica para enviar el formulario, por ejemplo, enviar un correo electrónico o almacenar los datos.
    console.log("Formulario enviado:", formData);
    // resetear el estado del formulario después de manejar los datos si es necesario.
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <section className="form_wrap">
        <section className="cantact_info">
          <section className="info_title">
            <span className="fa fa-user-circle"></span>
            <h2>For More Details Contact Me!</h2>
          </section>
          <section className="info_items">
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
          </section>
        </section>

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

            <label htmlFor="mensaje">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <input type="submit" value="Submit" id="btnSend" />

            {/* <input type="button" value="Submit" id="btnSend"/> */}
          </div>
        </form>
      </section>
    </>
  );
}
