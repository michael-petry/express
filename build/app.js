"use strict";
var express = require('express');
var app = express();
var port = 3000;
var pdfParser = require('../lib/pdf-parser');
app.get('/', function (req, res) {
    res.send('Hello World! ABC');
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
