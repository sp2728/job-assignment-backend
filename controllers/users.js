var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('../models');


exports.addUser = (req, res, next) => {
    try {

        models.User.findOne({where: {userId: req.body.userId}})
        .then((user)=>{
            if(user){
                res.json({ success: false, status: 'User Already Exists!' });
            }
            else{
                models.User.create({name: req.body.name, userId: req.body.userId})
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
        models.User.findOne({where: {userId: req.body.userId}})
        .then((user)=>{
            if(user){
                res.statusCode = 200;
                res.json({ success: true, status: 'User authenticated Successfully!', users: user }); 
            }
            else{
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

