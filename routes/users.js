
const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const nodemailer = require('nodemailer');
// Configuración de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Ruta para manejar el envío del formulario
// router.post('/enviar-correo', (req, res) => {
router.post('/', (req, res) => {

  const { name, email, phone, message, senderEmail } = req.body;

  // Configuración del contenido del correo
  const mailOptions = {
    from: senderEmail || 'vanicuc@gmail.com',
    to: senderEmail || 'vanicuc@gmail.com',
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };


  // Envío del correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado con éxito');
    }
  });
});

// Exportar el router para ser utilizado en tu aplicación principal
module.exports = router;
