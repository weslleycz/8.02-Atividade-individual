const express = require('express');
const handlebars = require('express-handlebars');
const {router} = require('./routes/routes.js');

const app = express();

app.engine('.hbs', handlebars.engine({
  defaultLayout: 'main',
  extname: '.hbs',
}));

app.set('view engine', '.hbs')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.listen(3000);