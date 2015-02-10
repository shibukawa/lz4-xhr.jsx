var path = require('path'); 

var compression = require('compression');
var express = require('express');

var app = express();

console.log(path.normalize(__dirname + "/../dest"));

app.use(compression({
    threshold: 0,
    filter: function (req, res) {
        return true;
        //return compression.filter(req, res);
    }
}));
app.use("/", express.static(path.normalize(__dirname + "/../dest")));

console.log("start listening: 19999");
app.listen(19999);
