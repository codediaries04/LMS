const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cors=require("cors");
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser())


dotenv.config({path:'./config.env'});

require('./db/conn');

//const User = require('./model/userSchema');

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions));



app.use(express.json());

app.use(require('./router/auth'));


const PORT = process.env.PORT;



// app.get('/learn', (req,res) => {
//     res.send('Hello about world from server');
// });

// app.get('/signup', (req,res) => {
//     res.send('Hello signup world from server');
// });

app.get('/signin', (req,res) => {
    res.send('Hello signin world from server');
});

app.get('/contact', (req,res) => {
    res.send('Hello contact world from server');
});


app.listen(PORT, () => {
    console.log(`server is runing a port no ${PORT}`);
})