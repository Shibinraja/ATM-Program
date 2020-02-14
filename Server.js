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

        const db = client.db("Atm");
        let userName = req.body.name;
        let userPass = req.body.password;

        console.log(req.body)

        var dbresult = db.collection("Atm").findOne({ name: userName });
            dbresult.then((data)=>{
                // console.log(data);
                if(userPass == data.password){
                    res.json({Message: "Success"})
                } else{
                    res.status(403).json({
                        Message: "Failure"
                    });
                }
            })
    
            client.close()

    });

});

app.post('/Balance', (req, res) => {

    MongoClient.connect(URL, (err, client) => {

        if (err) throw err;

        var db = client.db("Atm");
        console.log(req.body)

        var cursor = db.collection("Atm").findOne(req.body)

        cursor.then((data) => {

            // console.log(data.balance)
            res.json(data.balance);

        });

        client.close();

    });

})

app.post('/Deposit', (req, res) => {

    MongoClient.connect(URL, (err, client) => {

        if (err) throw err;

        var db = client.db("Atm");

        var insert = {name:req.body.name}
        var amount= parseInt(req.body.amount);
        var balance = parseInt(req.body.balance);
        let update = amount + balance
        var newvalues = {$set:{balance:update}}
        console.log(update)

        db.collection("Atm").updateOne(insert,newvalues, function(err,result){
            if (err) throw err;
    
                //console.log(result)
                res.status(200)
        });

        client.close();

    });

})

app.post('/Withdraw', (req, res) => {

    MongoClient.connect(URL, (err, client) => {

        if (err) throw err;

        var db = client.db("Atm");

        var insert = {name:req.body.name};
        var amount= parseInt(req.body.withdraw);
        var balance = parseInt(req.body.balance);
        let update = balance - amount
        var newvalues = {$set:{balance:update}}
        console.log(req.body)

        db.collection("Atm").updateOne(insert,newvalues, function(err,result){
            if (err) throw err;
    
                //console.log(result)
                res.status(200)
        });

        client.close();

    });

})
app.listen(6060)