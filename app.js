const http = require('http');

const express = require('express');

const app = express(); // a normal server like http server

// Middlewares ----> a function/some code that executes between a request and a response

app.use((req, res, next) => {
    console.log("In a MiddleWare!");
});

const server = http.createServer(app);

server.listen(3000);

