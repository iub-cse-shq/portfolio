'user strict'

module.exports = function(app){
    var core = require('./../controllers/core.controller');

    app.route('/').get(core.home);
    app.route('/home').get(core.homeaboutme);
    app.route('/resume').get(core.resume);
    app.route('/resumeCreate').get(core.resumeCreate);
    app.route('/contact').get(core.contact);
};