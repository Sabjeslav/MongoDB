User = require('./models/UserModel')

    module.exports = function(app) {

        app.get('/', (request, responce) => {
            responce.end("<h1>Hello from server</h1>")
        })

        app.get("/users", (request, responce) => {
            User.find(function(err, users) {
                if (err) responce.send(err)
                responce.json(users);
            });

        })

        app.post("/", (request, responce) => {
            request.send(users);
        })
    }