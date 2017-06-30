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
    console.log("req.body  is: " + req.body );
    console.log("req.body.lastName  is: " + req.body.lastName );
    console.log("req.body.email  is: " + req.body.email );
    var email = req.body.email;

    var query = Patient.find({
      "email": email
    }).exec(function(){console.log;})

    return res.json({ "query": query });
  }
  
};

