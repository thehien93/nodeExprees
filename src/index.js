const express = require('express');
const app = express();
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const path = require('path');
const port = 3000;
// HTTP morgan
app.use(morgan('combined'))
// teamplate handlebars
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));



// respond with "hello world" when a GET request is made to the homepage
app.get('/',  (req, res) => {
   res.render('home');
});

app.listen(port, () => console.log(`http://localhost:${port}`));