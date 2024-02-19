//users.js
const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; // Desactivar la validación del certificado (solo para desarrollo)


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


// Configuración de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host : "smtp.gmail.com" , 
  puerto : 465 , 
  seguro : true , 
  auth: { 
    user:  "vanicuc@gmail.com" , 
    pass: "hjxe hiba zxcq uzbx" , 
  }, 
  
});
// router.post('/user/email', async (req, res) => {
  
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: 'vanicuc@gmail.com',
    to: 'vanicuc@gmail.com',
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.response);
    res.status(200).send('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send('Error al enviar el correo');
  }
});




module.exports = router;


// 1076926002731-s5up228v4d6tlkpau5s5f1n0bvo5u7aq.apps.googleusercontent.com 
//id cliente

//secreto cliente
// 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

// hjxe hiba zxcq uzbx
//appVcuc
