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
        type: 'number'
    },
    contact: {
        type: 'string'
    },
    medicine: {
        type: 'string'
    }, // expand this later

    // Add a reference to Pharmacist
    provider: {
      model: 'Pharmacist',
      required: true
    },
    // TO DO: Add a reference to Medicines
    meds: {
      collection: 'Medicine', 
      via: 'prescribedTo'
    }
  }
};

