const express = require('express');
const path = require('path');
//test
const models = require('./models/models.js');
const healthController = require('./controllers/healthController.js')
const app = express();
const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/' , (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.get('/users' , healthController.getUsers , (req,res) => {
    res.status(200).json(res.locals.data);
})
app.post('/users'  ,healthController.addUser, (req,res) => {
    res.status(200).send("Character successfully added");
})

app.use( (req, res) => {
    return res.sendStatus(404);
})
console.log("geh")
//Global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT)
});