/**
 * PatientController
 *
 * @description :: Server-side logic for managing patients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  // POST /patient/login
  login: function (req, res) {
    // if the user has submitted a valid email and user name then let them proceed
    console.log("POST /patient/login hit...");
    sails.log.info(req.body);
    Patient.find({
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "email": req.body.email
    }).exec(function(err, result){
      return res.json({ "result": result });
    })
  }
};

