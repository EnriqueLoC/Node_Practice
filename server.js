const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


const myJsonCar = {
    model: "Mustang",
    year: 2007,
    types: ["convertible", "GT"]
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//manipulate the response setting no path because we want to affect all endpoints
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");//OPTIONS IS SENT BEFORE A POST REQUEST
    next();
})

app.get("/", (req, res) => {

    res.send("Hola mundo");

});

app.get("/message", (req, res) => {

    res.send("message");

});

app.get("/greetings/:name", (req, res) => {

    let recievedName = req.params.name;
    res.send("Hello " + recievedName);

});

app.listen(port, () => {
    console.log('my API is running');
});