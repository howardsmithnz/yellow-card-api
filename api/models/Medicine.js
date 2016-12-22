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
    }
    // add many-to-many link to Patient here 
  }
};

