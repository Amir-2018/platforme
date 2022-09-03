const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

// view engine

// database connection
const dbURI = 'mongodb+srv://Mirou:amir169114@cluster0.48u3p.mongodb.net/platforme?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(result =>{console.log('Connected successfully ...')})
  .then((result) => app.listen(3000,()=>{
    console.log('Server is listening on the port 3000 ...')
  }))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.use(authRoutes);