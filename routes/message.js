var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    new models({ email: req.body.email, content: req.body.content, created: req.body.created }).save();
};

