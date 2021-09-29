var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('../models');


exports.addUser = (req, res, next) => {
    try {

        models.Account.findOne({where: {username: req.body.username}})
        .then((user)=>{
            if(user){
                res.json({ success: false, status: 'User Already Exists!' });
            }
            else{
                models.Account.create({fullName: req.body.fullName, username: req.body.username, email: req.body.email, password:req.body.password})
                .then(response=>{
                    if (response) {
                        res.json({ success: true, status: 'Registration Successful!' });
                    }
                    else{
                        res.json({ success: false, status: 'Unable to create the User!' });
                    } 
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    catch (e) {
        throw e;
    }
};

exports.authenticateUser = (req, res, next)=>{
    try{
        models.Account.findOne({where: {username: req.body.username}})
        .then((user)=>{
            if(user){

                if(user.password == req.body.password){
                    res.statusCode = 200;
                    res.json({ success: true, status: 'User authenticated Successfully!', users: user }); 
                }
                else{
                    res.statusCode = 401;
                    res.json({ success: false, status: 'Incorrect username or password!', users: user }); 
                }

            }
            else{
                res.statusCode = 404;
                res.json({ success: false, status: 'No User exists'});  
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    catch (e) {
        throw e;
    }
}

exports.getPatientsData = (req, res, next) =>{
    try{
        models.Patient.findAll()
        .then((patients)=>{
            if(patients){
                res.statusCode = 200;
                res.json({ success: true, status: 'Patients retrieved successfully!', patients }); 
            }
            else{
                res.json({ success: false, status: 'No patient exists'});  
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    catch (e) {
        throw e;
    }
}

exports.getLabelData = (req, res, next) =>{
    try{
        models.Label.findAll()
        .then((labels)=>{
            if(labels){
                res.statusCode = 200;
                res.json({ success: true, status: 'Labels retrieved successfully!', labels }); 
            }
            else{
                res.json({ success: false, status: 'No Labels exists'});  
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    catch (e) {
        throw e;
    }
}

exports.getChartData = (req, res, next)=>{

    try{
        models.Chart.findAll()
        .then((data)=>{
            if(data){
                res.statusCode = 200;
                res.json({ success: true, status: 'Data Retrieved Successfully!', data }); 
            }
            else{
                res.statusCode = 404;
                res.json({ success: false, status: 'Unable to retrieve the data!' });   
            }
        })
        .catch((err) => {
            console.log(err);
        })

    }
    catch (e) {
        throw e;
    }
}

exports.addClickTime = (req, res, next) =>{

    try{
        models.Action.create({userId: req.body.userId, time: new Date().toDateString()+ new Date().toTimeString()})
        .then((response)=>{
            if(response){
                res.json({ success: true, status: 'Click time recorded successfully' });
            }
            else{
                res.json({ success: false, status: 'Error in recording click time' });
            }
        })
    }
    catch (e) {
        throw e;
    }
}

