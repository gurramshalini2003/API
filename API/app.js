const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const resRoutes = require('./Routes/Restaurant');

const hostname = 'localhost';
const port = 6503;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})

app.use('/api', resRoutes);

mongoose.connect('mongodb+srv://gurramshalini2003:3s2halini@cluster0.prute.mongodb.net/Restaurant?retryWrites=true&w=majority',
{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.then(client => {
    console.log('Connedted');
    app.listen(port, hostname, () => {
         console.log(`Server is running at http://${hostname}:${port}/`)
    });
}).catch(err => {
    console.log(err);
})