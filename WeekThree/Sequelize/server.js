const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const {Restaurant} = require('./Restaurant')
const {Menu} = require ('./Menu')
const {loadThenInsert} = require('./populateDB');
const { MenuItem } = require('./MenuItem');

const app = express();
const portNumber = 3000;


//Setting up template engline
//console.log("Setting up templates engine")
const handlebars = expressHandlebars({
    handlebars : allowInsecurePrototypeAccess(Handlebars)
})


app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

app.use(express.static('public')); //create file resource


app.get('/', async(req, res) => {
    const restaurants = await Restaurant.findAll({
      include: [
          {
              model: Menu, as: 'menus',
              include: [{model:MenuItem, as: 'items'}]
          }
      ],
      nest: true
    })
    res.render('index', {restaurants})
})
 

app.listen(portNumber, () => {
    console.log(`Server listening at http://localhost:${portNumber}`)
})
