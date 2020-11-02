/*const http = require('http')

const server = http.createServer((request, responce) => {
    if (request.url == "/") {
        responce.writeHead(200, {
            'Content-type': 'text/html'
        })
        responce.end("<h2>Hello from server!</h2>")
    }
    if (request.url == "/users") {
        responce.writeHead(200, {
            'Content-type': 'text/json'
        })
        const users = [
            {name: "Ivan", age: 25},
            {name: "Olexander", age: 20}
        ]
        responce.end(JSON.stringify(users));
    }
})

server.listen(8080, () => {
    console.log('Server running...')
})*/

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    routes = require('./routes'),
    mongoose = require('mongoose'),
    User = require('./models/UserModel')

mongoose.connect('mongodb://localhost/users_db');
routes(app);
app.listen(port);