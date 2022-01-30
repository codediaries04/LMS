const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');

const authenticate = require("../middleware/authenticate");

const router = express.Router();



require('../db/conn');
const User = require("../models/userSchema");


router.get('/',(req,res) =>{
    res.send(`Hello from router js`);
});

router.post('/signup',async(req, res) => {

    const { name, email, password, reEnterPassword} = req.body;
    
    if(!name || !email || !password || !reEnterPassword){
        return res.status(422).json({ error: "plz fill the field properly"});
    }

    try{

        const userExist= await User.findOne({email: email});
        if(userExist){
            return res.status(422).json({ error: "Email already exist"});
        }
        else if(password != reEnterPassword){
            return res.status(422).json({ error: "password not matching"});
        }
        else{
            const user = new User({
                name, email, password, reEnterPassword
            });

            await user.save();
            
            res.status(201).json({message: "User registered successfully"});
        }
    }catch(err){
        console.log(err);
    }
});

//signin route

router.post('/signin',async(req,res) => {
    try{
        const { email, password} = req.body;
    
        if(!email || !password){
            return res.status(400).json({ error: "plz fill the field properly"});
        }

        const userSignin= await User.findOne({email: email});

        if(userSignin) {
            const isMatch = await bcrypt.compare(password, userSignin.password);

            

            if(!isMatch){
                
                return res.status(400).json({ error: "Invalid Credientials"});
            }
            else{
                var token = await userSignin.generateAuthToken();
                console.log(token);

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true 
                });
                
                
                res.json({message: "user Signin Successfully"});
            }
        }
        else{
            return res.status(400).json({ error: "Invalid Credientials"}); 
        }
         

    }catch(err){
        console.log(err);
    }
});

router.get('/learn', (req,res) => {
    //res.send('Hello about world from server');
    res.status(200).send('success');
});

router.get('/about', (req,res) => {
    //res.send('Hello about world from server');
    res.status(200).send('success');
});

router.get('/logout', (req,res) => {
    //res.send('Hello about world from server');
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User logout');
});


module.exports= router;