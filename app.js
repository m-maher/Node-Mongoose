const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

const adminRoute = require('./routes/admin');

const adminController = require('./controllers/admin');

app.use(adminRoute);

app.use(adminController.getData);

mongoose
  .connect(
    'mongodb+srv://robot:lDFx3pwVBLG9Raym@cluster0-jj9fk.mongodb.net/test?retryWrites=true'
   )
  .then(result => {
    app.listen(8800);
  })
  .catch(err => {
    console.log(err);
  });