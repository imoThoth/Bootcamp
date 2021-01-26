const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');
const Handlebars = require ('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const handlebars = expressHandlebars({handlebars: allowInsecurePrototypeAccess(Handlebars)})


app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/index', (req, res) => {
    res.render('index', {date: new Date()});
})

app.get('/about', (req, res) => {
    res.render('about');
})




app.listen(3000, () => {
    console.log("Server running at port " , 3000);
});