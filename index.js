const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const pool = require('./services/database');
const api = process.env.API_URL;
const port = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());
app.use(morgan('tiny')); //This will log all the events received
app.use(cors());
require('dotenv/config'); //This carries all the environment variables

//Home route
app.get(`${api}`, (req, res) => {
    res.status(200).send('App running');
});

app.get(`${api}/query`,(req,res) => {
    const query = "SELECT * FROM table"; // ADD your query here
    pool.query(rquery,(error, results) => {
        if(error){
            console.log(error);
            res.status(400).send('Error de petición');
        }else{
            const resp = {
                status: 1,
                message: "Query ejecutado correctamente",
                result: results
            }
            res.status(200).send(resp);
        }
    });
});

//Listen
app.listen(port, () => {
    console.log('Server running at: http://localhost:3000' + api);
});