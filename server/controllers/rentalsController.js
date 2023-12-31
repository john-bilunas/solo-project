const models = require ('../models/models.js');
const rentalsController = {};

rentalsController.getRentals = async (req,res,next) => {
    try{
        console.log(req.query)
        const data = await models.Rentals.find(req.query);
        res.locals.data = data;
        return next();
    } catch(err){
        return next({
            log: 'Express error handler caught unknown middleware error: rentalsController.getUsers -> ' + err,
            status: 404,
            message: { err: 'An error occurred' },
          })
    }
};

rentalsController.addRental = async (req,res,next) => {
    console.log("req.body"+ req.body)
    const newRental = new models.Rentals({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        dumpsterSize: req.body.dumpsterSize,
        dropoffDate: req.body.dropoffDate,
        pickupDate: req.body.pickupDate,
        dropoffTime: req.body.dropoffTime,
        pickupTime: req.body.pickupTime,
        complete : false
    })

    try{
        await newRental.save();
        return next();
    } catch(err){
        return next({
            log: 'Express error handler caught unknown middleware error: rentalsController.addUser -> ' + err,
            status: 404,
            message: { err: 'An error occurred' },
          })
    }
    


};
rentalsController.updateRental = async (req,res,next) => {
    console.log(req.body)
    try{
        const data = await models.Rentals.findOneAndUpdate(req.body.filter, req.body.update);
        // res.locals.data = data;
        return next();
    } catch(err){
        return next({
            log: 'Express error handler caught unknown middleware error: rentalsController.getUsers -> ' + err,
            status: 404,
            message: { err: 'An error occurred' },
          })
    }
};


module.exports = rentalsController;