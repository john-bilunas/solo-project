const mongoose = require('mongoose');


const MONGO_URI = 'mongodb+srv://johnnyb7184:johnnyb7184@cluster0.zeizcb1.mongodb.net/starwars?retryWrites=true&w=majority';
// const MONGO_URI = 'mongodb+srv://johnnyb7184:IRKTZniMIq7e7oG4@cluster0.x9gvetn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'health'
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;



// //set schema for patients collection
// const patientsSchema = new Schema({
//     name : {type : String, required : true},
//     medList: Array,
//     medHistory : {
//         medName : String,
//         dose: String,
//         time : Date
//     },
// });
// const Patients = mongoose.model('patients', patientsSchema)

//set schema for users collection
// const usersSchema = new Schema({
//     // username : {type : String, required : true}, //required for signup
//     // password : {type : String, required : true}, //required for signup
//     // name : {type : String, required : true}, //required for signup
//     // patientList : String
//     name: String,
//     email: String,
//     phone: String,
//     dumpsterSize: Number,
//     dropoff: Date,
//     pickup: Date
// });
// const Users = mongoose.model('users', usersSchema)

//set schema for rentals collection
const rentalsSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    dumpsterSize: Number,
    dropoff: Date,
    pickup: Date
});

const Rentals = mongoose.model('rentals',rentalsSchema)
module.exports = {
    // Users,
    Rentals
}


/*


userSchema
    name : String
    patientList : [patientSchema]

patientSchema
    name: String
    medicineHistoryList: [medicineHistorySchema]


medicineHistorySchema
    medicineName : String
    dose: String
    time : Date



*/ 







