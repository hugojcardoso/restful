const express = require('express');
const consign = require('consign');
const bodyparser = require('body-parser');
const expressValidator = require('express-validator');


let app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(expressValidator());

consign().include('routes').include('utils').into(app);

app.listen(3000, '127.0.0.1',()=>{

    console.log('Server rodando by Hugo Cardoso!');

})