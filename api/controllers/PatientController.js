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

  login: function (req, res) {
    // if the user has submitted a valid email and user name then let them proceed
    console.log("GET /Patient hit...");
    sails.log.info(req.body);
    // console.log("req.query  is: " + req.query );
    // console.log("req.query.food  is: " + req.query.food );
    // console.log("req.params[0]  is: " + req.params[0] );
    console.log("req.body  is: " + req.body );
    console.log("req.body.lastName  is: " + req.body.lastName );
    console.log("req.body.email  is: " + req.body.email );
    var email = req.body.email;
    var isHere = Patient.find({
      email: email
    }).exec(function(){console.log("Done")})
    if (isHere) {
        console.log("I know you!")
        return res.send("Come on in...");
    } else {
        console.log("Go away stranger")
        return res.send("Bye");
    }
  }
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

