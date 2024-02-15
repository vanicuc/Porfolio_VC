



const cors = require('cors'); // Agregar al principio del archivo


const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();
const createError = require('http-errors');


////////////////////////mail//////////////////

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const userRouter = require('./routes/users'); // Ajusta la ruta al archivo user.js

const port = process.env.PORT || 4000;

app.use('/user', userRouter); 

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// app.use('/api/users', usersRouter);

////////////////////////mail//////////////////


// app.use(cors()); 
app.use(cors({
  origin: 'http://localhost:5173', // o el origen de tu aplicación React
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

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  const errorMessage = req.app.get('env') === 'development' ? err.message : 'Internal Server Error';
  res.json({ error: errorMessage });
});


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404 ));
// });


// // error handler
// app.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

  
//   res.status(err.status || 500);
//   res.json({ error: err.message });
//   res.json({ error: err.message });
// });

module.exports = app;
