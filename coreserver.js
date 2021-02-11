const express = require('express');

const app = express();

//Middlewares --- functions executed between a request and a response

app.use((req, res, next) => {
    console.log("Inside a MiddleWare!");
    next();
});

app.use((req,res,next) => {
    console.log("In Another MiddleWare!");
    next();
});

app.use((req,res,next) => {
    console.log("In Third MiddleWare!");
    console.log("======================");
    res.send("<h1 style = 'text-align: center'>Hello, From ExpressJs!</h1>");
})

//const server = http.createServer(app);

app.listen(3000);