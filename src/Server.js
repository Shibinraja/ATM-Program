const express = require('express');

const cors = require('cors');

const app = express();

const BodyParser = require('body-parser');

const MongoDb = require('mongodb');



const MongoClient = MongoDb.MongoClient;

const URL = "mongodb://localhost:/27017";



app.use(cors());

app.use(BodyParser.json());

app.post('/login', (req, res) =>{



    MongoClient.connect(URL, (err, client) => {

        if (err) throw err;

        var db = client.db("Task");
        var userName = {Name:req.body.name};
        var userPass = {Password:req.body.password};

        

        var cursor = db.collection("atm_program").find({Name:req.body.name}).toArray();

        cursor.then((data) => {

            console.log(res.data)
            if(userPass.Password == data.password){
                res.json({Message: "Success"})
            }

        })
 


        client.close()

    });

});

// app.get('/Details', (req, res) => {

//     MongoClient.connect(URL, (err, client) => {

//         if (err) throw err;

    

//         var db = client.db("Task");



//         var cursor = db.collection("atm_program").find().toArray();



//         cursor.then((data) => {

//             res.json(data);

//         })



//         client.close();

//     })

// })

app.listen(6060)