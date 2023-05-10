//Require Modules

const express = require('express');

//Create express app

const app = express();

//NOTE: it must start with ./ if it's just a file, not an NPM package
const fruits = require('./models/fruits.js'); 

// middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


//routes

app.get('/fruits', function(req, res){
  res.send('The fruits of my labor');
});     

app.get('/vegitables', function(req, res){
  res.send('I dont want no rabbit food');
});    

app.get('/cars', function(req, res){
  res.send('Fix Often Repaid Daily');
});    

app.get('/trucks', function(req, res){
  res.send('Lifted and going mudding baby wooo');
});    

app.get('/basketball', function(req, res){
  res.send('My ball Dribble dribbles ');
});    

app.get('/baseball', function(req, res){
  res.send('Grand slam!');
});    

app.get('/football', function(req, res){
  res.send('The one that doesnt like feet');
});    

app.get('/soccer', function(req, res){
  res.send('Feet only');
});    

app.get('/anime', function(req, res){
  res.send('Otaku friendly zone');
});    

app.get('/music', function(req, res){
  res.send('Zune 2024');
});    

//show thing

app.get('/fruits/:indexOfFruitsArray', function(req, res){
  res.render('Show', {
    fruit: fruits[req.params.indexOfFruitsArray] 
  });
  //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
});


app.listen(3000, ()=>{
  console.log('Listening on port 3000')
})