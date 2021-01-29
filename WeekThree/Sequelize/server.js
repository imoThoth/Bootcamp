const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const {Restaurant} = require('./Restaurants')
const {Menu} = require ('./Menu')
const {loadThenInsert} = require('./populateDB');
const { MenuItem } = require('./MenuItem');
const request = require('express')


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

//Data Parsing
app.use(express.urlencoded({ extended: false}))
app.use(express.json())


app.get('/', async(req, res) => {
    
    //const css = [{css:'/public/home.css'}]
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
 

app.use(request.static('restaurant'));


app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    const menus = await Menu.findAll({
        where:{
            restaurant_id: req.params.id   
        },
        include: [{model: MenuItem, as: 'items'}],
        nest: true
    }).catch((error)=>console.log(error))

    
    res.render('restaurant', {restaurant, menus})
})



/*
app.get('restaurants/:id/delete', async(req, res) => {
    Restaurant.findByPk(req.param.id)
        .then(restaurant => {
            restaurant.destroy()
            res.destroy()
            res.redirect('/')
           
        })
})
*/


app.route("/restaurants/:id/delete").get((req,res) => {
        res.redirect("/")
}).post((req,res)=>{
    console.log(req.params.id)
    Restaurant.findByPk(req.params.id)
    .then(restaurant => {
        restaurant.destroy()
        res.redirect('/')
    }).catch(error=>console.log(error))
})

app.get('/form', async(req,res) =>{
    res.render('form') 
})

app.post('/form', async (req, res) => {  
    // console.log(req.body)
    await Restaurant.create(req.body)
    res.redirect('/')
})

app.get('/ratings', async(req,res) =>{
    res.render('ratings')
})


//Create template for route restaurants
/*
app.get('restaurants/:id', async(req, res) =>{
    const restaurants = await Restaurant.findOne({
        where:{
            id:req.params.id
        },
        include: [
            {   
             
              include:[{model:MenuItem, as: 'items'}]
            }
        ],
        nest: true
    })

    res.send('restaurant', {restaurants})
})
*/

app.listen(portNumber, () => {
    console.log(`Server listening at http://localhost:${portNumber}`)
})

