var express  = require('express');
var filmController = require ('./controller/filmController');
var app = express();
var path = require('path');
var mongoose = require("mongoose");
var mongoURL = process.env.MONGODB_URI;

mongoose.connect(mongoURL, function (err) {
    if (err) return console.log(err);
    console.log("database works");
});

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res){
//     res.render('index', {
//         myData: "hello",
//         myArray: [{
//             title: "My title in here",
//             excerpt: "An excerpt"
//         },{
//             title: "My title in here",
//             excerpt: "An excerpt"
//         },{
//             title: "My title in here",
//             excerpt: "An excerpt"
//         },{
//             title: "My title in here",
//             excerpt: "An excerpt"
//         }]
//     })
// })
//my test writing a function to go to adding form page if this button is clicked//

app.get('/', function add (req,res) {
    res.render('index')
})

app.get('/new-add', filmController.getNewAdd)

app.post('/new-add/submit', filmController.postNewAdd)

app.get('/post/:id', function(req, res){
    res.send(`your id is ${req.params.id}`)
})
app.listen('3000', function(){
    console.log("its working")
})

