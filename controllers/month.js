
/**
 * Module dependencies.
 */

var utils = require('../lib/helpers');

exports.show = function(req, res){
  var month = utils.monthNumber(req.params.month)
    , items = db.months[month].items; // db comes from app.configure()

  res.expose({ month: month, settings: db.settings })
     .render('month', { month: month, items: items });
};