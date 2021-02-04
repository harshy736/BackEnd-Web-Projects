const express = require("express");
const bodyParser = require("body-parser");
const { ppid } = require("process");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

//BMI Calculator
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){

    var wg = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);

    var bmi = wg / (h * h);

    bmi = bmi.toFixed(2);

    res.send("Your BMI is " + bmi);

    if(bmi < 18.5){
        res.send("Your are UnderWeight.");
    }else if(bmi < 23.5){
        res.send("Your are Healthy Person.");
    }else{
        res.send("Your are OverWeight.");
    }
});


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});