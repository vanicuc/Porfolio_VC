
const express = require('express');

const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
const bodyParser = require('body-parser');

const router = express.Router();

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
  // auth: {
  //   user: process.env.EMAIL_USER,
  //   pass: process.env.EMAIL_PASSWORD,
  // },
});

// Ruta para manejar el envío del formulario

// router.post('/', (req, res) => {

 
//   const { name, email, phone, message } = req.body;


//   const mailOptions = {
//     from:'vanicuc@gmail.com',
//     to:'vanicuc@gmail.com',
//     subject: 'Nuevo mensaje del formulario de contacto',
//     text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
//   };

router.post('/email', async (req, res) => {
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


  // Envío del correo electrónico
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error(error);
  //     res.status(500).send('Error al enviar el correo');
  //   } else {
  //     console.log('Correo enviado: ' + info.response);
  //     res.status(200).send('Correo enviado con éxito');
  //   }
  // });


// Exportar el router para ser utilizado en tu aplicación principal
module.exports = router;


// 1076926002731-s5up228v4d6tlkpau5s5f1n0bvo5u7aq.apps.googleusercontent.com 
//id cliente

//secreto cliente
// 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

// hjxe hiba zxcq uzbx
//appVcuc
