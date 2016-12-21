/**
 * PatientController
 *
 * @description :: Server-side logic for managing patients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function (req, res) {
    return res.send('Hi there!');
  },
  bye: function (req, res) {
    return res.redirect('http://www.yahoo.com');
  }
};

