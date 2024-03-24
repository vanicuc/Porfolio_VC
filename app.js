
const cors = require('cors'); 
const express = require('express');
const path = require('path');

const createError = require('http-errors');
const sendEmailRouter = require('./routes/sendEmail');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const userRouter = require('./routes/sendEmail'); 

const port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(cors()); 

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));



// app.use(cors(corsOptions));
app.use('/api/sendEmail', sendEmailRouter);
app.options('/api/sendEmail', cors()); 
// app.options('/user/email', cors()); 




app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  const errorMessage = err.message ;
  res.json({ error: errorMessage });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});


// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Error interno del servidor');
// });

 

module.exports = app;
