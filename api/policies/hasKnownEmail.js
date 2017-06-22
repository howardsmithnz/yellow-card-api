/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow user with known email to authenticate
 *                 Assumes that your login action in one of your controllers sets `d = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller


  if (true) {
    console.log("Hi There!")
    console.log("Body: " + req.body)
    console.log("Email: " + req.body.email)
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};
