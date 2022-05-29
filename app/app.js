const path = require('path');
const express = require('express');
const morgan = require('morgan');
const port = 3000;
const exphbs  = require('express-handlebars').create({
  // extname: '.hbs',
});

const app = express();
const route = require('./routes');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine);


app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

console.log("PATH: " + path.join(__dirname, 'views'));

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/news', (req, res) => {
//   res.render('news');
// });
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});