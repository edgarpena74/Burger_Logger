const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express()

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//set up handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLauout: 'main'}));
app.set('view engine', 'handlebars')

//import routes and give server access to them
const routes = require('./controllers/burger_controller.js');

app.use(routes);

app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`)
})
