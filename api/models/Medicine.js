/**
 * Medicine.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    brandName: {
      type: 'string'
    },
    genericName: {
      type: 'string'
    },
    purpose: {
      type: 'string'
    },
    instructions: {
      type: 'string'
    },
    timings:{
      type: 'json'
    },
      
     /* Timings to look like this - 

      timings:{
        wake: 0,
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        bedtime: 0,
      }
      
      Storing as json object in model probably best bet, see
      http://stackoverflow.com/questions/24020055/sails-js-nested-models
    
    */
    
    // add many-to-many link to Patient here 
    prescribedTo: {
      collection: 'Patient',
      via: 'meds' 
    }
  }
};

