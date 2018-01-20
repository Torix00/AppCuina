/**
 * Receta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    nombre :{
      type:'string',
      required : true,
    },
    ingredientes :{
  		collection : 'ingrediente',
      via : 'recetas',
      required : false,
  	},
    numpers :{
      type: 'float',
      required : false,
    },
    categorias: {
      model : 'categoria',
      required : false,  
    },
    prep: {
      type : 'string',
      required : false,
    },
    dificultad :{
      type : 'string',
      required : false,
    },
  
  } 
};

