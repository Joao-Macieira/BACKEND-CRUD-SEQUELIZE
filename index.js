const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const model = require('./models/index');

const personsRoute = require('./routes/persons');

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('index');
});
app.use('/pessoas', personsRoute);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

model.sync().then(() => {
  app.listen(port, () => console.log(`Server started at ${port}`));
})
