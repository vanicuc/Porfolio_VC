
const express = require('express');
const cors = require('cors'); 

const app = express();
const createError = require('http-errors');


const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));


// const corsOptions = {
//   origin: 'http://localhost:5173', // Reemplaza con tu dominio de React
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));


const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');




const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const userRouter = require('./routes/sendEmail'); 

const port = process.env.PORT || 4000;

// app.use(cors());

// app.use('/user', userRouter); 
app.use('/sendEmail', userRouter); 

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');



// app.use(cors()); 
app.use(cors({
  origin: 'http://localhost:5173', 
  // o el origen de tu aplicación React
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.options('/user/email', cors()); // Ajusta la ruta según tus necesidades




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);




app.use(express.static(path.join(__dirname, 'client/build')));

// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   const errorMessage = req.app.get('env') === 'development' ? err.message : 'Internal Server Error';
//   res.json({ error: errorMessage });
// });



module.exports = app;
