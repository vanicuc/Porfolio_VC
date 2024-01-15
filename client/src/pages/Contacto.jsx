
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
      <div>
        <div className="MailBox">
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="name">Nombre:</label>
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
              <label htmlFor="email">Correo Electrónico:</label>
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
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}