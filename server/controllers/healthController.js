const models = require ('../models/models.js');
const healthController = {};

healthController.getUsers = async (req,res,next) => {
    try{
        const data = await models.Users.find({});
        res.locals.data = data;
        return next();
    } catch(err){
        return next({
            log: 'Express error handler caught unknown middleware error: healthController.getUsers -> ' + err,
            status: 404,
            message: { err: 'An error occurred' },
          })
    }
};

healthController.addUser = async (req,res,next) => {
    console.log("req.body"+ req.body.patientList)
    const newUser = new models.Users({
        username : req.body.username,
        password : req.body.password,
        name : req.body.name,
        patientList : req.body.patientList
    })

    try{
        await newUser.save();
        return next();
    } catch(err){
        return next({
            log: 'Express error handler caught unknown middleware error: healthController.addUser -> ' + err,
            status: 404,
            message: { err: 'An error occurred' },
          })
    }
    


};

module.exports = healthController;