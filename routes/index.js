var express = require('express'); // Get the module
var app = express(); // Create express by calling the prototype in var express

exports.view = function(req, res) {
    var data = {data: []};
    res.render("index", data);
}
