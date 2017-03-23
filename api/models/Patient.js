/**
 * Patient.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    NHINumber: {
        type: 'string' // iconically NHI numbers have letters, eg ABC1234
    },
    contact: {
        type: 'string'
    },

    // A reference to Pharmacist
    provider: {
      model: 'Pharmacist',
      //required: true - I want to add this back in later but it's causing issues
      //                  when adding data
    },
    // A reference to Medicines
    meds: {
      collection: 'Medicine', 
      via: 'prescribedTo'
    }
  }
};

