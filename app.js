
const express = require('express');
const cors = require('cors'); 
const path = require('path');
const app = express();


const createError = require('http-errors');
const sendEmailRouter = require('./routes/sendEmail');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const userRouter = require('./routes/sendEmail'); 



const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// app.use(cors(corsOptions));



app.use('/api/sendEmail', sendEmailRouter);
app.use(cors(corsOptions));
app.options('/api/sendEmail', cors()); 


app.options('/user/email', cors()); 

// app.use('/', indexRouter);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));




 app.use(express.static(path.join(__dirname, 'client/build')));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});

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




 

module.exports = app;





// const express = require('express');
// const cors = require('cors'); 
// const path = require('path');
// const app = express();


// const createError = require('http-errors');
// const sendEmailRouter = require('./routes/sendEmail');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');


// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const userRouter = require('./routes/sendEmail'); 



// const corsOptions = {
//   origin: 'http://localhost:5173',
//   credentials: true,
// };

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// app.use(cors(corsOptions));

// ///cambios ultimos bult//////
// // Configura la carpeta de construcción de React
// const reactBuildPath = path.join(__dirname, 'client/build');
// // Configura Express para servir la aplicación React
// app.use(express.static(reactBuildPath));

// ///cambios ultimos bult//////


// app.use('/api/sendEmail', sendEmailRouter);
// app.use(cors(corsOptions));
// app.options('/api/sendEmail', cors()); 


// app.options('/user/email', cors()); 

// // app.use('/', indexRouter);

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());




// app.use(cors({
//   origin: 'http://localhost:5173', 
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// }));




// //  app.use(express.static(path.join(__dirname, 'client/build')));

// ///cambio tres lineas !!!
// // Configura Express para redirigir todas las demás solicitudes a tu aplicación React
// app.get('*', (req, res) => {
//   res.sendFile(path.join(reactBuildPath, 'index.html'));
// });

// // app.get("*", (req, res) => {
// //   res.sendFile(path.join(__dirname + "/client/dist/index.html"));
// // });

// app.use(function(req, res, next) {
//   next(createError(404));
// });


// app.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   const errorMessage = err.message ;
//   res.json({ error: errorMessage });
// });




 

// module.exports = app;







