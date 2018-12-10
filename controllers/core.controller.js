'use strict';

module.exports.home = function(req, res){
    res.render('./../views/index.ejs');
};

module.exports.homeaboutme = function(req, res){
    res.render('./../views/home.ejs');
};

module.exports.resume = function(req, res) {
  res.render('./../views/resume.ejs');  
};
module.exports.resumeCreate = function(req, res) {
  res.render('./../views/resumeCreate.ejs');  
};
module.exports.contact = function(req, res) {
  res.render('./../views/contact.ejs');  
};