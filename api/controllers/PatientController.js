/**
 * PatientController
 *
 * @description :: Server-side logic for managing patients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function (req, res) {
    console.log("req.body: " + req.body);
    // return res.send('Hi there! Mr.' + req.body.lastName);
    return res.json(req.body)

  },
  bye: function (req, res) {
    return res.redirect('http://www.yahoo.com');
  },
  // create: function (req, res) {

  //   Patient.create(
  //       {
  //         firstName: req.body.firstName,
  //         lastName: req.body.lastName,
  //         NHINumber: req.body.NHINumber,
  //         contact: req.body.contact,
  //         timingZones: req.body.timingZones,
  //         timingZonesObj: req.body.timingZonesObj
  //       }
  //   ).exec(function () { console.log("New Patient added")});
  //   return res.json(req.body);
  // }
};

