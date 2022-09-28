// Imports
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const res = require("express/lib/response");
const post = require('./Models/posts');
const student = require('./Models/posts');
const postsRoutes = require('./Routes/posts');

//Base sets
const app = express();
/*mongoose.connect('mongodb://localhost:27017/testdb').then(() => {
    console.log("Connected to the DataBase")
}).catch(() => {
    console.log("Failed to connect to the DataBase")
});*/
const port = 8080;
const protectedRoute = express.Router();
app.set('key', 'secret');

protectedRoute.use((req, res, next) => {
    const token = req.headers["access-token"];
    if(token){
        jwt.verify(token, app.get('key'), (err, decoded) => {
            if (err){
              return res.send({'msg':'Invalid token'});  
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({'msg':'Token not provided'});
    }
});

app.use(express.json());
app.use(cors());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*"); // let any computer/domain to conect
    res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS"); // allows PUT, GET, POST, DELETE, OPTIONS verbs
    res.header("Access-Control-Allow-Headers","Content-Type"); // require a content-type header tag
    next();
});
app.use("/api/posts", postsRoutes);

//Endpoints section

app.get('/api/get', function(req, res){
    console.log('any string');
    res.send(
        'HOLA FUNCIONA PORFAVOR'
    );
});

app.listen(port, function(){
    console.log('Api is runing')
});