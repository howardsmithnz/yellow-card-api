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
  },
  create: function (req, res) {
    var tZ = req.body.timingZones;
    console.log("tZ is: ", tZ);
    console.log("type of tZ is: ", (typeof tZ));

    Patient.create(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          NHINumber: req.body.NHINumber,
          contact: req.body.contact,
          timingZones: req.body.timingZones,
          timingZonesObj: req.body.timingZonesObj
        }
    ).exec(function () { console.log("I just did something")});
    return res.send('Totally did it!');
  }
};

