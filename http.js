// var http = require('http');

// http.createServer((req, res) => {
//     console.log(`server running on 3002`)
//     res.write('Hello world!')
//     res.end();
// }).listen(3002);


var app = require('express')();
// var bodyParser = require('body-parser')
app.use(require('body-parser').json());

app.listen(3004, () => {
    console.log('Server listening on 3004');
});

app.get('/name', (req, res) => {
    var name = req.query.name;
    res.json(name);
})

// app.use('/static', express.static('public'));